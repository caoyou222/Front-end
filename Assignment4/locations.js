// data for optional find location extension to maps assignment
// x and y coordinates are for map-xl.gif, you should scale them
// in your program based on the current map resolution

var locationArray = new Array(
		{names: ["Gates"], x: 1558, y: 1461},
		{names: ["MemChu","Memorial Church"], x: 1845, y: 1883},
		{names: ["Tresidder Union", "Tresidder"], x: 1804, y: 2225},		
		{names: ["Florence Moore Hall", "Florence Moore", "FloMo"], x: 1705, y: 2496},
		{names: ["Bookstore", "Book Store"], x: 2022, y: 2144},
		{names: ["MemAud", "Memorial Auditorium", "Memorial Hall"], x: 2262, y: 1600},
		{names: ["Green Library", "Green"], x: 2173, y: 1898},
		{names: ["Meyer Library", "Meyer"], x: 2157, y: 2026}			
	);

var mapArray = new Array({src:["map-s.gif"], scale:1},
	{src: ["map-m.gif"], scale: 1.595}, {src:["map-l.gif"], scale: 2.387},
	{src:["map-xl.gif"], scale: 3.183});


//Resizing Functions
var newH, newW;
var section = document.getElementById("main");
var frm = document.getElementById("frame");
var myImg = document.getElementById("map");
var width;
var height;
var offsets;
var OrigX, OrigY;
var offsets2;
var mapCurr = 0;

function handleResize()
{
	
	var WinW = window.innerWidth;
	var WinH = window.innerHeight;
	frm.style.width = 500*(parseInt(WinW)/1000) + "px";
	frm.style.height = 400*(parseInt(WinH)/500) + "px";
	section.style.width = 800*(parseInt(WinW)/1000) + "px";
	section.style.height = 450*(parseInt(WinH)/500)+"px";
	section.style.marginTop = 30 + "px";
	section.style.marginBottom = 30 + "px";
	section.style.marginLeft = 80 + "px";
	section.style.marginRight = 50 + "px";
	width = parseInt(frm.style.width);
	height = parseInt(frm.style.height);
	offsets = document.getElementById('frame').getBoundingClientRect();
	OrigX = offsets.left + width/2;
	OrigY = offsets.top + height/2;


	myImg.style.width = width*mapArray[mapCurr].scale + "px";
	myImg.style.height = height*mapArray[mapCurr].scale + "px";
}

handleResize();
window.addEventListener("resize", handleResize, false)

//Centering Functions
var A = 0, B = 0;
var lastCurr = 0;

function center(event)
{
	var newX, newY;
	newX = OrigX - event.clientX;
	newY = OrigY - event.clientY ;
	var OrigLeft = offsets2.left;
	var OrigTop = offsets2.top;
	// myImg.style.left = offsets2.left - 118+newX + "px";
	// myImg.style.top = offsets2.left - 118+newY + "px";
	myImg.style.transform = "translate(" + (A + newX) + "px," + (B + newY) + "px)";
	A = newX+A; B = newY+B; lastCurr = mapCurr;
}


//Zooming Functions

function ZoomIn()
{
	if(mapCurr == 3) mapCurr = 3;			
	else 
	{
		mapCurr += 1;
		offsets2 = document.getElementById("map").getBoundingClientRect();

		myImg.src = mapArray[mapCurr].src;
		myImg.style.width = width*mapArray[mapCurr].scale+ "px";
		myImg.style.height = height*mapArray[mapCurr].scale+ "px";

		var CurrL = offsets2.left;
		var CurrT = offsets2.top;
		var ScaleDiff = 1 - (mapArray[mapCurr].scale/mapArray[mapCurr-1].scale);
		myImg.style.transform = "translate(" + (CurrL +  (ScaleDiff*width*mapArray[mapCurr-1].scale)/2) + "px," + (CurrT + (ScaleDiff*height*mapArray[mapCurr-1].scale)/2) + "px)";
	}
	
}

function ZoomOut()
{
	if(mapCurr == 0) mapCurr = 0;
	else
	{
		mapCurr -= 1;
		offsets2 = document.getElementById('map').getBoundingClientRect();
		myImg.src = mapArray[mapCurr].src;
		myImg.style.width = width*mapArray[mapCurr].scale + "px";
		myImg.style.height = height*mapArray[mapCurr].scale + "px";
		
		var CurrL = offsets2.left;
		var CurrT = offsets2.top;
		var ScaleDiff = 1 - (mapArray[mapCurr].scale/mapArray[mapCurr+1].scale);
		myImg.style.transform = "translate(" + (CurrL +  (ScaleDiff*width*mapArray[mapCurr+1].scale)/2) + "px," + (CurrT + (ScaleDiff*height*mapArray[mapCurr+1].scale)/2) + "px)";
	}
	
	

}

document.getElementById("in").addEventListener("click", ZoomIn, false);
document.getElementById("out").addEventListener("click", ZoomOut, false);

//Scrolling Functions
var C = 0, D = 0;
function move(x,y)
{
 	myImg.style.transform = "translate(" + (x*width+C) + "px," + (y*height+D) + "px)";
 	C = x*width+C; D = y*height+D
}


//Dragging Functions

function inBox(x,y) {
	return (x >= offsets.left && x <= offsets.left + width
				&& y >= offsets.top && y <= offsets.top + height);
}

var isDragging = false;
var SA, SB;
var newL = 0, newT = 0;

function handleMouseDown(event) {
	event.preventDefault();
	SA = event.clientX;
	SB = event.clientY;
	if (inBox(event.clientX,event.clientY)) {
		isDragging = true;
		frm.style.cursor = "move";
		return false;	// don't forget this line or some versions of Firefox will get in trouble when dragging
	}
}

function handleMouseUp(event) {
	if (isDragging) {
		isDragging = false;
		frm.style.cursor = "auto";
		newL = newL + event.clientX - SA;
		newT = newT + event.clientY - SB;
	}
}

function handleMouseMove(event) {
	if (isDragging) {

		myImg.style.left = (newL + event.clientX - SA) + "px";
		myImg.style.top = (newT + event.clientY - SB) + "px";

		
		
		return false;  // don't forget this line or some versions of IE won't allow dragging;
	}
}

/// SETUP FUNCTIONS
document.addEventListener("mousedown",handleMouseDown,false);
document.addEventListener("mouseup",handleMouseUp,false);
document.addEventListener("mousemove",handleMouseMove,false);

