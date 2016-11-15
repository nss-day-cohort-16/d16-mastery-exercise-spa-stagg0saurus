"use strict";
//The event listeners IIFE
//First, augment CarLot 
var CarLot = (function (oldCarLot) {
  //Define activateEvents
	oldCarLot.activateEvents = function() {
          //Make a single var that grabs all cards by class and puts them in an array
		var carCards = document.getElementsByClassName("carCard");
        //Define input bar from Bootstrap 
          var input = document.getElementById("input");
          //create a loop so that the handlers are applied to each card 
		for (var j = 0; j < carCards.length; j++) {
          //Call all functions to be applied to mouse click within this loop. Some of them will be defined in the borders file
			carCards[j].addEventListener("click", function() {
                    oldCarLot.removeBorder(carCards);
                    /*"this", in this case, is carCards[j], add will get plugged in as an 
                    argument anywhere you've set a parameter of 'element'*/
                    //Color only worked as an argument when we set it to a hex value
                    CarLot.addBorder(this, "#4286f4");  
                    oldCarLot.clearInput();
                    oldCarLot.bind(this);
                  });		

		}
		//Simplest first. clearInput clears the text input, and is called in the click handler.
		oldCarLot.clearInput = function() {
			input.value = "";
		}
          /*Bind sets the value of the input field to replace the value of 'description'
          in the cards, but only if the "isClicked" class is being applied via the addBorder 
          function in borders.js. This condition is important for making sure Bind is
          only applied to the currently highlighted card.*/

          oldCarLot.bind = function(element) {
                  input.addEventListener("keyup", function () {
                  if (element.classList.contains("isClicked")) {
                  //element is equal to "this", which is carCards[j]
                  //querySelector is a useful tool that lets you dive into objects to
                  //target specific properties. We set the class "description" in "quiz.js"
                  element.querySelector(".description").innerHTML = input.value;
                }
                })

          }
        }
	return oldCarLot; 

})(CarLot || {});