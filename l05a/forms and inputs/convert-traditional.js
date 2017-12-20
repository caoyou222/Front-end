function cToF() {
	formElement = document.getElementById("convertForm");
	
	celsius = parseFloat(formElement.celsius.value);
	fahrenheit = celsius * 9 / 5 + 32;
	
	formElement.fahrenheit.value = fahrenheit;
}

document.getElementById("convertButton").addEventListener("click", cToF, false);
