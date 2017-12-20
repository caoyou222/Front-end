function calculateTotal() {
  var total = 0;
  if (document.getElementById("friday").checked)
    total = total + 8;
  if (document.getElementById("saturday").checked)
    total = total + 8;
  if (document.getElementById("sunday").checked)
    total = total + 8;
  document.getElementById("total").value = total;
}

document.getElementById("totalButton").addEventListener("click",calculateTotal,false);