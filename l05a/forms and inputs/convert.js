function cToF() {
	celsiusElement = document.getElementById("celsius");
	fahrenheitElement = document.getElementById("fahrenheit");
	
	celsius = parseFloat(celsiusElement.value);
	fahrenheit = celsius * 9 / 5 + 32;
	
	fahrenheitElement.value = fahrenheit;
}

document.getElementById("convertButton").addEventListener("click", cToF, false);
