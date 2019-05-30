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
    Paint.divCreation(e)
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