function changeTitle() {
	document.title = "Amazing Properties!";
}
document.getElementById("titleButton").addEventListener("click",changeTitle,false);

function printToConsole() {
	console.log("Print to Console!");
}
document.getElementById("consoleButton").addEventListener("click",printToConsole,false);
