function changeColors() {
    document.fgColor = document.getElementById("main").foreground.value;
    document.bgColor = document.getElementById("main").background.value;
}

document.getElementById("changeColorButton").addEventListener("click",changeColors,false);