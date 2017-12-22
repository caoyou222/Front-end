var cardArray = new Array({cardName:"1clubs.png", value:1}, {cardName:"2clubs.png", value: 2}, 
						{cardName:"3clubs.png", value: 3}, {cardName:"1hearts.png", value: 1}, 
						{cardName:"2hearts.png", value: 2}, {cardName:"3hearts.png", value:3});

function shuffle() 
{
  var currentIndex = cardArray.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) 
  {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex --;

    temporaryValue = cardArray[currentIndex];
    cardArray[currentIndex] = cardArray[randomIndex];
    cardArray[randomIndex] = temporaryValue;
  }
}

shuffle();
var count = 0;
var card1, card2;
var flip1 = 0, flip2 = 0;

function goback()
{
	card1.src = "back.png";
	card2.src = "back.png";
	flip1 = 0; flip2 = 0;
}

function match()
{
	card1.src = "clear.png";
	card2.src = "clear.png";
	flip1 = 0; flip2 = 0;
}


function flip(idname)
{
	if(flip1 == 0)
	{
		card1 = document.getElementById(idname);
		if(card1.src.indexOf("clear.png") == -1)
		{
			flip1 = 1;
			card1.src = cardArray[idname].cardName;
			card1.value = cardArray[idname].value;
		}
		
	}
	
	else if (flip1 == 1 && flip2 == 0 && idname != card1.id)
	{
		card2 = document.getElementById(idname);
		if(card2.src.indexOf("clear.png") == -1)
		{
			flip2 = 1;
			card2.src = cardArray[idname].cardName;
			card2.value = cardArray[idname].value;
			if(card1.value == card2.value)	setTimeout(match, 1000);
			else setTimeout(goback, 1500);
		}
		
	}
}

function reset()
{
	shuffle();
	flip1 = 0; flip2 = 0; count = 0;
	document.getElementById("1").src = "back.png";
	document.getElementById("1").value = 0;
	document.getElementById("2").src = "back.png";
	document.getElementById("2").value = 0;
	document.getElementById("3").src = "back.png";
	document.getElementById("3").value = 0;
	document.getElementById("4").src = "back.png";
	document.getElementById("4").value = 0;
	document.getElementById("5").src = "back.png";
	document.getElementById("5").value = 0;
	document.getElementById("0").src = "back.png";
	document.getElementById("0").value = 0;

}
document.getElementById("reset").addEventListener("click", reset, false);
