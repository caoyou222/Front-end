var author = ["Thomas Mann", "James Joyce", "E.M. Forster", "Isabel Allende", "Isabel Allende"];
var title = ["Death in Venice", "A portrait of the artist as a young man", "A room with a view", "The house of spirits", "Of love and shadows"];
var description = ["One of the most famous literary works of the twentieth century, this novella embodies themes that preoccupied Thomas Mann in much of his work: the duality of art and life, the presence of death and disintegration in the midst of existence, the connection between love and suffering and the conflict between the artist and his inner self.", 
"This book is a fictional re-creation of the Irish writer's own life and early environment. The experiences of the novel's young hero, unfold in astonishingly vivid scenes that seem freshly recalled from life and provide a powerful portrait of the coming of age of a young man of unusual intelligence, sensitivity and character. ",
"This work displays an unusually perceptive view of British society in the early 20th century.It is a social comedy set in Florence, Italy, and Surrey, England. Its heroine, Lucy Honeychurch, struggling against straitlaced Victorian attitudes of arrogance, narroe mindedness and sobbery, falls in love - while on holiday in Italy - with the socially unsuitable George Emerson.", 
"Allende describes the life of three generations of a prominent family in Chile and skillfully combines with this all the main historical events of the time, up until Pinochet's dictatorship.",
"he whole world of Irene Beltran, a young reporter in Chile at the time of the dictatorship, is destroyed when she discovers a series of killings carried out by government soldiers. With the help of a photographer, Francisco Leal, and risking her life, she tries to come up with evidence against the dictatorship."];

function FindbyAuthor(){
	var index = author.indexOf(document.getElementById("name").value);
	document.getElementById("title").value = title[index];
	document.getElementById("textbox").value = description[index];
}

function FindbyTitle(){
	var index = title.indexOf(document.getElementById("title").value);
	if(document.getElementById("name").value != author[index] && document.getElementById("name").value != "")
	{document.getElementById("textbox").value = "Book Not Found";}
	else{
		document.getElementById("name").value = author[index];
		document.getElementById("textbox").value = description[index];
	}
	
}

function Searching(){
	if (title.indexOf(document.getElementById("title").value) != -1){FindbyTitle();}
	else if(author.indexOf(document.getElementById("name").value) != -1){FindbyAuthor();}
	else{document.getElementById("textbox").value = "Book Not Found";}
}

function reset(){
	document.getElementById("name").value = "";
	document.getElementById("title").value = "";
	document.getElementById("textbox").value = "";
}

document.getElementById("find").addEventListener("click",Searching,false);
document.getElementById("clear").addEventListener("click",reset,false);