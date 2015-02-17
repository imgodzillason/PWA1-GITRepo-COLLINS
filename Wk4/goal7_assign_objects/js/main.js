/**
 * Jacob Collins
 * Class: PWA
 * Goal: Goal7
 * 1/30/15
 */

(function(){ //create self-executing function

    var names = ["Mr. Blonde", "Mr. Brown", "Mr. White", "Mr. Pink", "Mr. Blue"]; //names array
    var people = []; //people array created
    var rowNumber = 1;
    var rowOne = ;//set up variable for row 1
    var rowTwo = ; //set up variable for row 2
    var rowThree = ; //set up variable for row 3

    for(var i=0; i<3; i++){ //for loop initiated and continues until it reaches 3
        var nameIndex = Math.floor(Math.random() * names.length); //creates random number to choose name from array

        //create new person and places in row
        //creates variable personName and sets it to equal person.name

        people.push(person); //push person name to array
        if(personName != rowOne.innerHTML && personName != rowTwo.innerHTML && personName != rowThree.innerHTML){ //set if statement to get names
            //set names for rows twice
        } else{
            //decrease i variable by 1
            //decrease rowNumber by 1
        }
    }

    //after for loop runs, increase rowNumber by 1

    var interval = setInterval(runUpdate, 1000/30); //sets interval to run 30 times a second

    function populateHTML(){
        //create local variable
        //point to HTML id that needs information to be replaced
        //change innerHTML for info
    }

    function runUpdate(){
        //loop through array and calls person.js file for updated information
        people.forEach(function(element){

            element.update();
    })

    }

})();