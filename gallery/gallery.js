"use strict";

var photoArray = [
		{filename: "memchu.jpg",
		 caption: "Stanford Memorial Church - the church used to have an 80' bell tower, which fell in the 1906 earthquake."},
		{filename: "quad.jpg",
		 caption: "The Stanford Quad"},
		{filename: "hoop.jpg",
		 caption: "The <i>Red Hoop Fountain</i> with Green Library in the background."},
		{filename: "memorial-court.jpg",
		 caption: "Memorial Court (in the front of the Quad) with Rodin's <i>Burghers of Calais</i> statues."},
		{filename: "gates.jpg",
		 caption: "The Gates Building - home of Stanford Computer Science."},
		{filename: "stone-river.jpg",
		 caption: "The Stone River statue near the Cantor Arts Center (Stanford's own art museum)."},
	];

var newH, newW;
var section = document.getElementById("photoSection");

function handleResize()
{
	newH = (window.innerHeight - 600)/2;
	newW = (window.innerWidth - 800)/2;
	section.style.marginTop = newH + "px";
	section.style.marginBottom = newH + "px";
	section.style.marginLeft = newW + "px";
	section.style.marginRight = newW + "px";
	
}

handleResize();

window.addEventListener("resize", handleResize, false)

var cur = 0;
var pic = document.getElementById("photo");
var cap = document.getElementById("caption");



function forward()
{
	if(cur == 5) cur = 0;
	else cur += 1;

	pic.src = photoArray[cur].filename;
	cap.innerHTML = photoArray[cur].caption;
}

document.getElementById("forwardOverlay").addEventListener("click", forward, false);

function backward()
{
	if(cur == 0) cur = 5;
	else cur -= 1;

	pic.src = photoArray[cur].filename;
	cap.innerHTML = photoArray[cur].caption;
}

document.getElementById("backwardOverlay").addEventListener("click", backward, false);

function hide(name)
{
	document.getElementById(name).style.display= "none";
}

function show(name)
{
	document.getElementById(name).style.display= "block";
}

hide("right"); hide("left");
























