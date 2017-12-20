export var PI = 3.14;

export function inform(msg) {
  alert("Important:" + msg);
}

var x = 15;  // can declare and then export later in the file
export x;

var y = 12;  // internal to module

function myTest() { // also internal to module
	alert("internal");
}
