/**
 * Jacob Collins
 * Class: PWA
 * Goal: Goal7
 * 1/30/15
 */

window.person = Person; //storing person for use in main.js file

Person.jobs = ["Driver", "Gunner", "Runner", "Mastermind"]; //set up jobs in array
Person.actions = ["Sleeping", "Committing Heist", "Driving", "Talking"]; //set up actions in array

function Person (names, row){ //create constructor function using names and row as parameters/keys
    this.name = //assign value stored in names parameter
    this.actions = //assign single value for action choice
    this.jobs = //assign single value for jobs
    this.rows = ;//assign value to row passed in parameter

}

Person.prototype.actionUpdate = function(){
    //set up statement to check if number is valid
    //update action approx. every 5 seconds
    //set to correct column to change action
    //use innerHTML to change value of column

};