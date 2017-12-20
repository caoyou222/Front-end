interface Student {
	name: string;
	year: number;
}

var currStudent: Student;

currStudent = {
	name: "Patrick",
	year: 4
}

var studentArray: Student[] =
	[{
		name: "Patrick",
		year: 4
	},
	{
		name: "Tamara",
		year: 4
	},
	{
		name: "Molly",
		year: 1
	}];

	
function printStudentInfo(st: Student): void {
	console.log(st.name + ": " + st.year);
}

function printAnything(thing: any): void {
	console.log(thing);
}

printStudentInfo(currStudent);
	
var likeStudent = {
		name: "Molly",
		dorm: "FloMo",
		year: 1
	}
	
printStudentInfo(likeStudent);
