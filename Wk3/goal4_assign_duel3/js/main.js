/**
 Jacob Collins
 PWA- Section 1
 1/23/15
 Analyze Duel #3
 */

//self-executing function

(function() { //start of function

    console.log("FIGHT!"); //print fight to console

    //create object with three properties for both fighters in array
    var players = [
        playerOne = {name: "Deadpool", damage: 20, health: 100}, //first fighter object properties
        playerTwo = {name: "Wolverine", damage: 20, health: 100} //second fighter object properties
    ];

    //round starting point
    var round = 0;

    //create variable for fight button
    var button = document.querySelector(".buttonblue");

    //player health start
    document.getElementById("kabal").innerHTML = players[0].name+ " : " + players[0].health; //show Deadpool's health
    document.getElementById("kratos").innerHTML = players[1].name + " : " + players[1].health; //show Wolverine's health

    //fight function
    function fight() {

        var minDamage1 = players[0].damage * .5; //minimum damage halved for player 1 edit: changed variable to array for player 1
        var minDamage2 = players[1].damage * .5; //minimum damage halved for player 2 edit: changed variable to array for player 2
        //round down integer after multiplying random number by the max damage subtracted by min damage, after added to min damage for player 1
        var f1 = Math.floor(Math.random() * (players[0].damage - minDamage1) + minDamage1); //edit:changed variable to match new array for player 1
        //round down integer after multiplying random number by the max damage subtracted by min damage, after added to min damage for player 2
        var f2 = Math.floor(Math.random() * (players[1].damage - minDamage2) + minDamage2);// edit: changed variable to match new array for player 2

        //inflict damage
        players[0].health -= f1; //damage inflicted on player one //edit: changed array to new object set for player 1
        players[1].health -= f2; //damage inflicted on player two //edit: changed array to new object set for player 2

        var endResults = winnerCheck(); //check for winner by calling function

        if (endResults === "no winner") { //if no winner, increase next round and pop up name, health, and round of both players
            round++;

            document.getElementById("kabal").innerHTML = players[0].name+ " : "+ players[0].health; //show Deadpool's health
            document.getElementById("kratos").innerHTML = players[1].name+ " : "+ players[1].health; //show Wolverine's health
            document.getElementById("round_number").innerHTML = "ROUND " + round + ": COMPLETED!";

        } else {
            document.getElementById("scores").innerHTML = endResults; //replace score with endResults
            document.getElementById("round_number").innerHTML = endResults; //replace round number with endResults
            document.getElementById("scores").style.textAlign = "center";

            button.innerHTML = "FINISH HIM!";
            button.setAttribute("onclick", null);
        } //close out else statement
    } //close out for loop


    //check for winner
    function winnerCheck() { //check for winner

        var result = "no winner"; //if there isn't a winner, return no winner result

        if (players[0].health < 1 && players[1].health < 1) { //if both player's health is below 1 //edit: changed variables to match new array for both players
            result = "You both die."; //show that they both died
        } else if (players[0].health < 1) { //if player one's health is less than 1 //edit: changed variables to match new array for both players
            result = players[1].name + " WINS!!!"; //show player two wins //edit: changed variables to match new array for both players
        } else if (players[1].health < 1) { //if player two's health is less than 1 //edit: changed variables to match new array for both players
            result = players[0].name + " WINS!!!"; //show player one wins //edit: changed variables to match new array for both players
        } //close out else/if statement

        return result; //return the result of the function

    } //close out function winnerCheck

    var endResults = winnerCheck();

    //program begins

    button.onclick = function (e) {

        fight();
        e.preventDefault();
        return false;
    };
})();