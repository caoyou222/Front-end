function bodyKey() {
	alert("pressed in body");
}
function inputKey() {
	alert("pressed in input");
}

document.getElementsByTagName("body")[0].addEventListener("keypress",bodyKey,false);
document.getElementsByTagName("input")[0].addEventListener("keypress",inputKey,false);

