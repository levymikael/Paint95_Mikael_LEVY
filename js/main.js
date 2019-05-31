const canvas = document.getElementById("canvas");
var Paint = {};

// canvas size feature
Paint.heightChange = function () {
  var heightValue = parseInt(document.getElementById("height").value);
  document.getElementById("canvas").style.height = heightValue;
  return document.getElementById("canvas").style.height = heightValue + 'px';
}
document.getElementById("setHeight").addEventListener('click', Paint.heightChange);

Paint.widthChange = function () {
  var widthValue = parseInt(document.getElementById("width").value);
  document.getElementById("canvas").style.width = widthValue;
  return document.getElementById("canvas").style.width = widthValue + 'px';
}
document.getElementById("setWidth").addEventListener('click', Paint.widthChange);

// Pen size modifier
dotSize = document.getElementsByClassName("brush_sizes");
for (var i = 0; i < dotSize.length; i++) {
  dotSize[i].addEventListener("click", (e) => dotSize = e.target.id);
}
//Eraser size modifier
Paint.EraserSize = function (e) {
  var newDiv = document.createElement("div");
  newDiv.style.backgroundColor = "white";
  newDiv.style.position = "absolute";
  newDiv.style.height = "10px";
  newDiv.style.width = "10px";
  newDiv.style.height = EraserSize;
  newDiv.style.width = EraserSize;
  newDiv.style.left = e.clientX - canvas.offsetLeft + 'px';
  newDiv.style.top = e.clientY - canvas.offsetTop + 'px';
  canvas.appendChild(newDiv);
};

Paint.eraser = function (e) {
  if (e.which === 1) {
    Paint.EraserSize(e);
  }
}
canvas.addEventListener("mousemove", Paint.eraser);

EraserSize = document.getElementsByClassName("eraser");
for (var i = 0; i < EraserSize.length; i++) {
  EraserSize[i].addEventListener("click", (e) => EraserSize = e.target.id);
}

//dot drawing
Paint.divCreation = function (e) {
  var newDiv = document.createElement("div");
  newDiv.style.backgroundColor = "black";
  newDiv.style.backgroundColor = color;
  newDiv.style.position = "absolute";
  newDiv.style.height = "10px";
  newDiv.style.width = "10px";
  newDiv.style.height = dotSize;
  newDiv.style.width = dotSize;
  newDiv.style.left = e.clientX - canvas.offsetLeft + 'px';
  newDiv.style.top = e.clientY - canvas.offsetTop + 'px';
  canvas.appendChild(newDiv);
};

Paint.draw = function (e) {
  if (e.which === 1) {
    Paint.divCreation(e);
  }
}
canvas.addEventListener("mousemove", Paint.draw);


// Color selection
color = document.getElementsByClassName("color");
for (var i = 0; i < color.length; i++) {
  color[i].addEventListener("click", (e) => color = e.target.id);
}

// clear screen feature
Paint.clear = function () {
  var allLines = canvas.getElementsByTagName("div");
  while (allLines.length > 0) {
    canvas.removeChild(allLines[0]);
  }
}
document.getElementById("clear_screen").addEventListener('click', Paint.clear);

Paint.New = function () {
  var paintName = prompt("What is the name of your new draw?");
  var paintTitle = document.getElementById("paint-title");
  paintTitle.innerHTML = paintName;
  Paint.clear();
};


Paint.save = function () {
  Paint.New();
  var paint = document.getElementById("canvas");
  var PaintLeft = paint.getBoundingClientRect().left;
  var PaintTop = paint.getBoundingClientRect().top;
  var paintObj = {};
  paintObj["name"] = document.getElementById("paint-title").innerHTML;
  paintObj["allLines"] = [];
  var allDraw = paint.getElementsByTagName("div");
  for (var i = 0; i < allDraw.length; i++) {
    var currentDraw = allDraw[i];
    var lineObj = {};
    lineObj["div"] = currentDraw.innerHTML;
    lineObj["top"] = currentDraw.getBoundingClientRect().top - PaintTop;
    lineObj["left"] = currentDraw.getBoundingClientRect().left - PaintLeft;
    paintObj["allLines"].push(lineObj);
  }
  localStorage.setItem('paint', JSON.stringify(paintObj));
  alert("Paint saved");
};
document.getElementById("save").addEventListener("click", Paint.save);

Paint.load = function () {
  var loadedPaint = localStorage.getItem('paint');
  var paintObj = JSON.parse(loadedPaint);
  Paint.clear();
  var paintTitle = document.getElementById("paint-title");
  paintTitle.innerHTML = paintObj["name"];
  var allLines = paintObj["allLines"];
  for (var i = 0; i < allLines.length; i++) {
    var currentLine = allLines[i];
    Paint.placeLines(currentLine["div"],
      currentLines["top"] + "px",
      currentLines["left"] + "px");
  }
  Paint.show();
  alert("Paint Loaded");
};
document.getElementById("load").addEventListener("click", Paint.load);

Paint.show = function () {
  var canvas = document.getElementById("canvas");
  canvas.style.display = "block";
};
//Rotate buttons
Paint.rotateRight = function (){
  canvas.style.transform = "rotate(90deg)";
}
document.getElementById("rotate-right").addEventListener("click",Paint.rotateRight);

Paint.rotateLeft = function (){
  canvas.style.transform = "rotate(270deg)";
}
document.getElementById("rotate-left").addEventListener("click",Paint.rotateLeft);

Paint.flip = function (){
  canvas.style.transform = "rotate(180deg)";
}
document.getElementById("flip").addEventListener("click",Paint.flip);
