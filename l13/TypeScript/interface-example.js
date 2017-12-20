var currStudent;
currStudent = {
    name: "Patrick",
    year: 4
};
var studentArray = [{
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
function printStudentInfo(st) {
    console.log(st.name + ": " + st.year);
}
function printAnything(thing) {
    console.log(thing);
}
printStudentInfo(currStudent);
var likeStudent = {
    name: "Molly",
    dorm: "FloMo",
    year: 1
};
printStudentInfo(likeStudent);
