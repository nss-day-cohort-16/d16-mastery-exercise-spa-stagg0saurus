"use strict";
//Function to build cards to output to DOM
function populatePage (inventory) {
	//Container is a single parent element that does not repeat
	let container = document.getElementById("container"); 
	//carDiv will be the giant string in which the cards will go
	let carDiv = '';
	//Loop needed to loop run through JSON object info
	for(var i = 0; i < inventory.length; i++) {
	//bring in the inventory file from CarLot and loop it 
	let getInfo = inventory[i]; 
	//Next, set rows to include every 3 columns
	if (i % 3 === 0) {
	//add these to the string 
          carDiv += `<div class="row">`;
          }
          //use literal notation to add in the columns and object info, organized into DOM elements, that will loop each time
	carDiv += 
	`<div class="col-md-3 carCard" id="col${i}">
	<h3>${getInfo.make}</h3>
	 <h2>${getInfo.model}</h2>
	 <h3>${getInfo.year}</h3>
	 <h2>${getInfo.price}</h2>
	 <h3 class="description">${getInfo.description}</h3>
	 </div>`;
	 //now end the rows with a closing tag, again to encapsulate every three columns
	if ((i + 1) % 3 === 0) {
          carDiv += `</div>`;
	}
}
  //now add this entire built up string to the parent containe's inneHTML. 
	container.innerHTML += carDiv;
	//Remember to call the function that adds in the event listeners for each card
          CarLot.activateEvents();
}
//call the loadInventory IIFE (from CarLot) that takes the function above as an argument to print everything to the DOM
CarLot.loadInventory(populatePage);	
 // Load the inventory and send a callback function to be
// invoked after the process is complete

