/* the randomnumber guessing game generates a number from 1 to 6 and gives a user opportunity to guess through the numbers */

// assuming the player didnt guess correctly
var correctguess = false; 

// generated a randomnumber from 1 to 6
var randomnumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('i am thinking of a number between 1 and 6, what is it?.');

/* test to see if 
the player is correct 
guess is more
guess is low
*/
if (parseInt(guess) === randomnumber ) {
correctguess = true;
}else if (parseInt(guess) < randomnumber )  {
    var guessmore = prompt('try again, the number i am thinking is more than ' + guess); 
    if (parseInt(guessmore) === randomnumber) {
        correctguess = true; 
    }
} else if (parseInt(guess) > randomnumber) {
    var guessless = prompt('try again, the number i am thinking is less than ' + guess);
    if (parseInt(guessless) === randomnumber) {
        correctguess = true;
    }
}

//test if player is correct and output response   
if (correctguess){
    document.write('<p>you guessed the number!</p>');
}else {
    document.write('<p> sorry the number was ' + randomnumber +'.</p>');
}
