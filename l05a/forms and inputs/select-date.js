
function convertDate() {
  var theForm = document.getElementById("dateConversion");
  var month = theForm.month.selectedIndex + 1;
  var day = theForm.day.value;
  var year = theForm.year.value;

  theForm.convertedDate.value = month + "/" + day + "/" + year;
}

document.getElementById("convertButton").addEventListener("click",convertDate,false);