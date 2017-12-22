var univArray = new Array(
		{name: "Stanford University", nickname: "Stanford", ownership: "private", SATh: 1570, SATl: 1380, tuition: 44757},
		{name: "University of California, Berkeley", nickname: "UC Berkeley", ownership: "public", SATh: 1500, SATl: 1250, tuition: 13844},
		{name: "University of California, Santa Cruz", nickname: "UC Santa Cruz", ownership: "public", SATh: 1280, SATl: 1000, tuition: 13398},
		{name: "San Francisco State University", nickname: "SFSU", ownership: "public", SATh: 1110, SATl: 880, tuition: 6468},
		{name: "San Jose State University", nickname: "SJSU", ownership: "public", SATh: 1160, SATl: 880, tuition: 9496},
		{name: "Sonoma State University", nickname: "Sonoma State", ownership: "public", SATh: 1090, SATl: 880, tuition: 7276},
		{name: "California State University, East Bay", nickname: "CalState East Bay", ownership: "public", SATh: 1010, SATl: 800, tuition: 6550, room: 6435},
		{name: "University of San Francisco", nickname: "USF", ownership: "private", SATh: 1270, SATl: 1070, tuition: 41450},
		{name: "Santa Clara University", nickname: "SCU", ownership: "private", SATh: 1380, SATl: 1190, tuition: 43812},
		{name: "Mills College", nickname: "Mills College", ownership: "private", SATh: 1250, SATl: 1040, tuition: 42918}
		);

var table = document.getElementById("result");

function clear()
{
	while(table.rows[1]) table.deleteRow(table.rows.length - 1);
}

function getmaxT()
{
	if(document.getElementById("maxtuition").value != "")
		{return document.getElementById("maxtuition").value;}
	else return 50000;
}

function getmaxSAT()
{
	if(document.getElementById("maxSAT").value != "")
		{return document.getElementById("maxSAT").value;}
	else return 1600;
}

function getminSAT()
{
	if(document.getElementById("minSAT").value != "")
		{return document.getElementById("minSAT").value;}
	else return 0;
}

function alternate()
{ 
  if(document.getElementsByTagName)
  {     
    var rows = table.getElementsByTagName("tr");   
    for(i = 1; i < rows.length; ++i)
    {           
      if(i % 2 == 0) rows[i].className = "odd"; 
      else rows[i].className = "even";      
    } 
  } 
}

function criteria()
{
	clear();
	var maxT = getmaxT();
	var minSAT = getminSAT();
	var maxSAT = getmaxSAT();
	var count = 1;
	var os = "";
	var ownerForm = document.getElementById("ownership");
	for(var k = 0; k < 3; k++){
		if(ownerForm.elements[k].checked){os = ownerForm.elements[k].value;}
	}

	if(os == "don't care")
	{
		for(var i = 0, j = 1; i < 10; ++i)
		{
			if(univArray[i].SATl >= minSAT && univArray[i].SATh <= maxSAT && univArray[i].tuition <= maxT)
			{
				table.insertRow(j);
				for(var c = 0; c < 4; ++c) table.rows[j].insertCell(c);
				table.rows[j].cells[0].innerHTML = univArray[i].nickname;
				table.rows[j].cells[1].innerHTML = univArray[i].SATh;
				table.rows[j].cells[2].innerHTML = univArray[i].SATl;
				table.rows[j].cells[3].innerHTML = univArray[i].tuition;
				j++;
			}
		}
	}
	else
	{
		for(var i = 0, j = 1; i < 10; ++i)
		{
			if(univArray[i].SATl >= minSAT && univArray[i].SATh <= maxSAT && univArray[i].tuition <= maxT && univArray[i].ownership == os)
			{
				table.insertRow(j);
				for(var c = 0; c < 4; ++c) table.rows[j].insertCell(c);
				table.rows[j].cells[0].innerHTML = univArray[i].nickname;
				table.rows[j].cells[1].innerHTML = univArray[i].SATh;
				table.rows[j].cells[2].innerHTML = univArray[i].SATl;
				table.rows[j].cells[3].innerHTML = univArray[i].tuition;
				j++;
			}
		}
	}

	alternate();
	
}

document.getElementById("search").addEventListener("click", criteria, false);
