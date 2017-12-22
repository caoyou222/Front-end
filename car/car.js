
function setPhoto() {
	document.getElementById("photo").src = document.getElementById("pulldown").value;;
}

function calculateTotal() {
  var priceForm = document.getElementById("price");
  var total = 0;
  for(var i=0; i<10; i++){
    if (priceForm.elements[i].checked) {
      total = total + parseInt(priceForm.elements[i].value);
    }
  }
 
  document.getElementById("rs").value = "$" + total;
}

document.getElementById("calculateButton").addEventListener("click",calculateTotal,false);
