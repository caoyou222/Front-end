interface Student {
	name: string;
	readonly id: number;
	dorm?: string;
	year: number;
}

function printInfo(st: {name: string, year: number}): void {
	console.log(st.name + ": " + st.year);
}
