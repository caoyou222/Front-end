function calculateTotal() {
  var mealsForm = document.getElementById("meals");
  var total = 0;
  if (mealsForm.friday.checked)
    total = total + 8;
  if (mealsForm.saturday.checked)
    total = total + 8;
  if (mealsForm.sunday.checked)
    total = total + 8;
  mealsForm.total.value = total;
}

document.getElementById("totalButton").addEventListener("click",calculateTotal,false);