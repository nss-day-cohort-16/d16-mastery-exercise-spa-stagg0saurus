"use strict";

//These are the functions that add or remove colors/class to the "click" event 
//created in events.js
var CarLot = (function (oldCarLot) {
	//takes two arguments
	oldCarLot.addBorder = function(element, color) {
		element.classList.add("isClicked");
		//in-JS CSS; rarely used according to Joe
		element.style.background = color; 
		//bring the cursor to the input field when a card is clicked using focus
		document.getElementById("input").focus();

	}
	//removing the previously applied class requires a "for" loop so that all previous applications 
	//of isClicked are removed 
	oldCarLot.removeBorder = function(allOfIt) {
		for (var k = 0; k < allOfIt.length; k++) {
			var cars = allOfIt[k]
			cars.classList.remove("isClicked");
			//easy way to get rid of the in-JS CSS color 
			cars.style.background = ''; 
		}

	}

return oldCarLot 


})(CarLot || {});