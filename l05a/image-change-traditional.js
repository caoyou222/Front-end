function changeToRed() {
	document.photo.src='images/red.jpg';
}

function changeToWhite() {
	document.photo.src='images/white.jpg';
}

document.getElementById("redButton").addEventListener("click",changeToRed,false);
document.getElementById("whiteButton").addEventListener("click",changeToWhite,false);