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
    var rowOne = getElementById("r1c1"); //set up variable for row 1
    var rowTwo = getElementById("r2c1"); //set up variable for row 2
    var rowThree = getElementById("r3c1"); //set up variable for row 3

    for(var i=0; i<3; i++){ //for loop initiated and continues until it reaches 3
        var nameIndex = Math.floor(Math.random() * names.length); //creates random number to choose name from array

        var person = new Person(names[nameIndex], rowNumber); // creates new person and places in row
        var personName = person.name; //creates variable personName and sets it to equal person.name

        people.push(person); //push person name to array
        if(personName != rowOne.innerHTML && personName != rowTwo.innerHTML && personName != rowThree.innerHTML){ //set if statement to get names




        }

        function populateHTML()













})