/**
 Jacob Collins
 PWA- Section 1
 1/10/15
 Analyze Duel #1
 */

//self-executing function

(function(){

    console.log("FIGHT!");

    //player name
    var playerOneName = "Wolverine";
    var playerTwoName = "Deadpool";

    //player damage
    var playerOneDamage = 20;
    var playerTwoDamage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //round
    var round = 1;

    //fight function
    function fight(){
        console.log("in the fight function");
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);

        for(var i=0; i<10; i++){
          //Math.floor(Math.random() * (max - min) + min);

          var minDamage1 = playerOneDamage * .5;
          var minDamage2 = playerTwoDamage * .5;
          var f1 = Math.floor(Math.random() * (playerOneDamage - minDamage1) + minDamage1);
          var f2 = Math.floor(Math.random() * (playerTwoDamage - minDamage2) + minDamage2);

          console.log(f1);
          console.lgo(f2);
        };
    };

    //check for winner
    function winnerCheck(){
        //code will go here

    };

    //program begins
    console.log("program start");
    fight();

})();