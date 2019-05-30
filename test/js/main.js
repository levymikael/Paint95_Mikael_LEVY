// canvas size
function heightChange() {
    var heightValue = parseInt(document.getElementById("height").value);
    document.getElementById("canvas").style.height = heightValue;
    return document.getElementById("canvas").style.height = heightValue + 'px';
}
document.getElementById("setHeight").addEventListener('click', heightChange);

function widthChange() {
    var widthValue = parseInt(document.getElementById("width").value);
    document.getElementById("canvas").style.width = widthValue;
    return document.getElementById("canvas").style.width = widthValue + 'px';
}
document.getElementById("setWidth").addEventListener('click', widthChange);
var Paint = {};
var color = "";
Paint.divCreation = function (e) {
  console.log(e);
  var newDiv = document.createElement("div");
  if (Paint.divCreation != undefined) {
    newDiv.style.backgroundColor = color;
    newDiv.style.position = "absolute";
    newDiv.style.height = "50px";
    newDiv.style.width = "50px";
    newDiv.style.left = e.clientX - canvas.offsetLeft + 'px';
    newDiv.style.top = e.clientY - canvas.offsetTop + 'px';
    canvas.appendChild(newDiv);
  } else {
    alert("please select a color")
  }
};

document.getElementById("blue").addEventListener("click", (e) => color = e.target.id);
document.getElementById("red").addEventListener("click", (e) => color = e.target.id);
document.getElementById("yellow").addEventListener("click", (e) => color = e.target.id);
document.getElementById("black").addEventListener("click", (e) => color = e.target.id);
document.getElementById("green").addEventListener("click", (e) => color = e.target.id);
document.getElementById("brown").addEventListener("click", (e) => color = e.target.id);
document.getElementById("white").addEventListener("click", (e) => color = e.target.id);


const canvas = document.getElementById("canvas");
canvas.addEventListener("mousemove", draw);

function draw(e){
  if(e.which===1){
    Paint.divCreation(e)
  }
}