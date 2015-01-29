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
    this.name = names; //assign value stored in names parameter
    this.actions = person.actions[Math.floor(Math.random() * Person.length.actions)]; //assign single value for action choice
    this.row = row; //assign value to row passed in parameter

}