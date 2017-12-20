function calculateTotal() {
  var total = 0;
  if (document.forms[0].elements[0].checked)
    total = total + 8;
  if (document.forms[0].elements[1].checked)
    total = total + 8;
  if (document.forms[0].elements[2].checked)
    total = total + 8;
  document.forms[0].elements[3].value = total;
}

document.getElementById("totalButton").addEventListener("click",calculateTotal,false);