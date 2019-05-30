const canvas = document.getElementById("canvas");
var Paint = {};
var color = document.getElementsByClassName("color");

// canvas size
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

//dot drawing
Paint.divCreation = function (e) {
  var newDiv = document.createElement("div");
  if (color != "") {
    newDiv.style.backgroundColor = color;
    newDiv.style.position = "absolute";
    newDiv.style.height = "10px";
    newDiv.style.width = "10px";
    newDiv.style.left = e.clientX - canvas.offsetLeft + 'px';
    newDiv.style.top = e.clientY - canvas.offsetTop + 'px';
    canvas.appendChild(newDiv);
  } else {
    alert("please select a color first")
  }
};

// Color selection
for (var i = 0; i < color.length; i++) {
  color[i].addEventListener("click", (e) => color = e.target.id);
}

Paint.draw = function (e) {
  if (e.which === 1) {
    Paint.divCreation(e)
  }
}
canvas.addEventListener("mousemove", Paint.draw);