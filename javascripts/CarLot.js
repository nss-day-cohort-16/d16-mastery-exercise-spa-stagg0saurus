"use strict";

var CarLot = (function () {
var inventory = [];

//the callback is the function on quiz.js
/*This is the XHR function, and it will usually look like this. 
Its job is to parse the JSON object, package that info in an array, and ship that array over to 
quiz.js*/
//this IIFE will return the results of the request
  return {
    //It receives the function created in quiz.js as an argument
    loadInventory: function (populatepagefromquiz) {
      //declare new request
      var inventoryLoader = new XMLHttpRequest();
      //give it an address to "get" the info from
      inventoryLoader.open("GET", 'javascripts/inventory.json');
      //EXECUTE!
      inventoryLoader.send();
      //Set listener to invoke the function on page load
      inventoryLoader.addEventListener("load", function () {
       //This, in this case, is the response text of inventoryLoader. Its refering to this instance of XMLhttpRequest
      inventory = JSON.parse(this.responseText).cars;
      //do the DOM creation function to our newly-packaged inventory data. This is a callback
      populatepagefromquiz(inventory);

  });
  
  

    },
    //Remember to return inventory 
    getInventory: function () {
      return inventory;
    }
  };

})(CarLot || {});
