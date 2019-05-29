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
