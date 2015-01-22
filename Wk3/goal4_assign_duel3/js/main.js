/**
 Jacob Collins
 PWA- Section 1
 1/23/15
 Analyze Duel #3
 */

//self-executing function

(function(){ //start of function

    console.log("FIGHT!"); //print fight to console

/* //edit out previous variables to replace with array
    //player's name
    var playerOneName = "Wolverine"; //player one name
    var playerTwoName = "Deadpool"; //player two name

    //player's damage
    var playerOneDamage = 20; //player one damage
    var playerTwoDamage = 20; //player two damage

    //player's health
    var playerOneHealth = 100; //player one health
    var playerTwoHealth = 100; //player two health
*/
    //array for player stats

    var playerStats1 = ["Wolverine", 20, 100];  //array for player 1 stats (name, damage, health)

    var playerStats2 = ["Deadpool", 20, 100];  //array for player 2 stats (name, damage, health)


    //round starting point
    var round = 1;

    //fight function
    function fight(){
        console.log("in the fight function"); //test to make sure function called correctly
        alert(playerStats1[0]+":"+playerStats1[2]+"  *START*  "+playerStats2[0]+":"+playerStats2[1]); //pop up showing name, health, and start //edit:changed variables to match arrays

        for(var i=0; i<10; i++){    //set up number of times to go through function...start at 0 and go until it reaches 10 by adding 1 every time
          //Math.floor(Math.random() * (max - min) + min); //formula to determine damage

          var minDamage1 = playerStats1[1] * .5; //minimum damage halved for player 1 edit: changed variable to array for player 1
          var minDamage2 = playerStats2[1] * .5; //minimum damage halved for player 2 edit: changed variable to array for player 2
            //round down integer after multiplying random number by the max damage subtracted by min damage, after added to min damage for player 1
          var f1 = Math.floor(Math.random() * (playerStats1[1] - minDamage1) + minDamage1); //edit:changed variable to match new array for player 1
            //round down integer after multiplying random number by the max damage subtracted by min damage, after added to min damage for player 2
          var f2 = Math.floor(Math.random() * (playerStats2[1] - minDamage2) + minDamage2);// edit: changed variable to match new array for player 2

          //inflict damage
          playerStats1[2] -= f1; //damage inflicted on player one
          playerStats2[2] -= f2; //damage inflicted on player two
            //print both player's names and health to console
            console.log(playerStats1[0]+":"+playerStats1[2]+ " " +playerStats2[0]+":"+playerStats2[2]); //edit: changed output to match new array

            var results = winnerCheck(); //check for winner by calling function
            console.log(results); //print out results to console

            if (results ==="no winner"){ //if no winner, increase next round and pop up name, health, and round of both players
                round++;
                alert(playerStats1[0]+":"+playerStats1[2]+"  *ROUND "+round+" OVER* " +playerStats2[0]+":"+playerStats2[2]); //edit: changed output to match new array
            }else{
                alert(results); //pop up results
                break; //stop code if meets requirements
            } //close out else statement
        }; //close out for loop
    }; //close out fight function

    //check for winner
    function winnerCheck(){ //check for winner

        var result = "no winner"; //if there isn't a winner, return no winner result

        if(playerStats1[2]<1 && playerStats2[2]<1) { //if both player's health is below 1 //edit: changed variables to match new array for both players
            result = "You both die."; //show that they both died
        }else if(playerStats1[2] < 1){ //if player one's health is less than 1 //edit: changed variables to match new array for both players
            result = playerStats2[0] + " WINS!!!"; //show player two wins //edit: changed variables to match new array for both players
        }else if(playerStats2[2] < 1){ //if player two's health is less than 1 //edit: changed variables to match new array for both players
            result = playerStats1[0] + " WINS!!!"; //show player one wins //edit: changed variables to match new array for both players
        }; //close out else/if statement

        return result; //return the result of the function

    }; //close out function winnerCheck

    //program begins
    console.log("program start");
    fight(); //begin program

})(); //self-invoking to start program