var wordOptions = ["giraffe", "elephant","kangaroo", "bobcat", "leopard", "rabbit", "zebra", "monkey", "wolf", "tiger", "donkey", "jaguar", "squirrel", "rhinoceros", "goose", "penguin", "turtle", "raccoon", "ferret", "antelope", "mouse", "chicken", "camel"];

var animal = ""; //when select word at random from the wordList

var letters = []; //word that is played on is going to break it up into letters

var dashes = 0; //will hold the number of letters in the word

var dashesandLetters = []; //will store the right or wrong letters. stores underscores or letters

var wrongLetters = []; //stores the wrong letter guesses

var win = 0;
var loss = 1;
var guessesLeft = 9; //only have 9 lives






function startGame() {
    guessesLeft = 9;
    dashesandLetters = []; //makes empty at start
    wrongLetters = []; //makes empty at start

Array.prototype.shuffle = function() {
        var input = this;

        for (var i = input.length-1; i >=0; i--) {

            var randomIndex = Math.floor(Math.random()*(i+1));
            var itemAtIndex = input[randomIndex];

            input[randomIndex] = input[i];
            input[i] = itemAtIndex;
        }
        return input;
    }

wordOptions.shuffle();


	animal = wordOptions[Math.floor(Math.random() * animal.length)];
	lettersInChosenWord = animal.split("");
	dashes = lettersInChosenWord.length;


	for (var i = 0; i < dashes; i++) {
	    dashesandLetters.push("-");
	}
	console.log(dashesandLetters);
  document.getElementById('#animal').innerHTML = dashesandLetters.join("");

	document.getElementById('guessesLeft').innerHTML = guessesLeft;
    document.getElementById('wrongLetters').innerHTML = wrongLetters.join(" ");

};

function checkLetters(letter){ //function that gets input from the user

    var letterInWord = false;
//1. Compare the letter the user picks matches any of the letters in the word
//2. I want a conditional statement to determine if the letter the user picked is in the word. If so, do something, if not, do something else.
    for(var i = 0; i < dashes; i++){
        if (animal[i] === letter){
            letterInWord = true;

        }
    }
//will only run if above for loop is true
    if(letterInWord){
        for (i = 0; i < dashes; i++) {
            if (animal[i] === letter) {
                dashesandLetters[i] = letter;
            }

        }
        //3. If the user is wrong we want to decrease the numGuesses variables by one
    } else{ //if letter is wrong
        guessesLeft --;
        wrongLetters.push(letter);
    }

};
/* to check if a letter is already in teh wrong guesses array. set up an if/else conditional that will run a for loop that will iterate ocer all teh letters and then use the if/else to check if it already exists.
 */

function roundComplete() {
    /*
    1. Its going to update the HTML with the letters that are in the word
    2. Its going to update the HTML with guesses we have left
    3. Its going to update the HTML to show the wrong guesses
    4. Its going to determine whether the user won the game or not

    */


    document.getElementById('#animal').innerHTML = dashesandLetters.join("");
    document.getElementById("wrongLetters").innerHTML = wrongLetters;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("win").innerHTML = win;
    document.getElementById("loss").innerHTML = loss;





        console.log(lettersInChosenWord);

    	if(lettersInChosenWord.join(" ") === dashesandLetters.join(" ")){
        var audioWin = document.getElementById("GameWin");
        audioWin.play();
        win++;
        document.getElementById('win').innerHTML = win;
        alert("You win!!");
    		startGame();
    	} else if(guessesLeft === 0){
        var audioLose = document.getElementById("GameLose");
        audioLose.play();
    		document.getElementById('loss').innerHTML = loss++;
    		document.getElementById('wrongLetters').innerHTML = " ";

    		alert("You lose!");

        startGame();
    	}

};
startGame();

    document.onkeyup = function(){


        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("this is the letter we type", letterGuessed);
        checkLetters(letterGuessed);
        roundComplete();


};

var reloadPage = function() {
    var playButton = document.getElementById('play');
    playButton.style.visibility = "hidden";
    startGame();
}


var allAudios = document.querySelectorAll('audio');



function stopAllAudio(){
 allAudios.forEach(function(audio){
   audio.pause();
 });
}

document.querySelector('#words2').addEventListener('click', function() {
 stopAllAudio();
});
