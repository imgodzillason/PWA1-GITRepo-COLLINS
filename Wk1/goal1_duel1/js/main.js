/**
 Jacob Collins
 PWA- Section 1
 1/10/15
 Analyze Duel #1
 */

//self-executing function

(function(){ //start of function

    console.log("FIGHT!"); //print fight to console

    //player's name
    var playerOneName = "Wolverine"; //player one name
    var playerTwoName = "Deadpool"; //player two name

    //player's damage
    var playerOneDamage = 20; //player one damage
    var playerTwoDamage = 20; //player two damage

    //player's health
    var playerOneHealth = 100; //player one health
    var playerTwoHealth = 100; //player two health

    //round starting point
    var round = 1;

    //fight function
    function fight(){
        console.log("in the fight function"); //test to make sure function called correctly
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth); //pop up showing name, health, and start

        for(var i=0; i<10; i++){    //set up number of times to go through function...start at 0 and go until it reaches 10 by adding 1 every time
          //Math.floor(Math.random() * (max - min) + min); //formula to determine damage

          var minDamage1 = playerOneDamage * .5; //minimum damage halved for player 1
          var minDamage2 = playerTwoDamage * .5; //minimum damage halved for player 2
            //round down integer after multiplying random number by the max damage subtracted by min damage, after added to min damage for player 1
          var f1 = Math.floor(Math.random() * (playerOneDamage - minDamage1) + minDamage1);
            //round down integer after multiplying random number by the max damage subtracted by min damage, after added to min damage for player 2
          var f2 = Math.floor(Math.random() * (playerTwoDamage - minDamage2) + minDamage2);

          //inflict damage
          playerOneHealth -= f1; //damage inflicted on player one
          playerTwoHealth -= f2; //damage inflicted on player two
            //print both player's names and health to console
            console.log(playerOneName+":"+playerOneHealth+ " " +playerTwoName+":"+playerTwoHealth);

            var results = winnerCheck(); //check for winner by calling function
            console.log(results); //print out results to console

            if (results ==="no winner"){ //if no winner, increase next round and pop up name, health, and round of both players
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER* " +playerTwoName+":"+playerTwoHealth);
            }else{
                alert(results); //pop u presults
                break; //stop code if meets requirements
            } //close out else statement
        }; //close out for loop
    }; //close out fight function

    //check for winner
    function winnerCheck(){ //check for winner

        var result = "no winner"; //if there isn't a winner, return no winner result

        if(playerOneHealth<1 && playerTwoHealth<1) { //if both player's health is below 1
            result = "You both die."; //show that they both died
        }else if(playerOneHealth < 1){ //if player one's health is less than 1
            result = playerTwoName + " WINS!!!"; //show player two wins
        }else if(playerTwoHealth < 1){ //if player two's health is less than 1
            result = playerOneName + " WINS!!!"; //show player one wins
        }; //close out else/if statement

        return result; //return the result of the function

    }; //close out function winnerCheck

    //program begins
    console.log("program start");
    fight(); //begin program

})(); //self-invoking to start program