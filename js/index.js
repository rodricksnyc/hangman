// Word Array
const wordOptions = ["zebra", "giraffe", "monkey", "elephant","kangaroo", "bobcat", "leopard", "rabbit", "wolf", "tiger", "donkey", "jaguar"];
//Variables
let animal = "";
let letters = [];
let dashes = 0;
let dashesandLetters = [];
let wrongLetters = [];
let alreadyGuessed = [];
let win = 0;
let loss = 0;
let guessesLeft = 10;


// var allAudios = document.querySelectorAll('audio');
//
//
//
// function stopAllAudio(){
// 	allAudios.forEach(function(audio){
// 		audio.pause();
// 	});
// }
//
// document.querySelector('#words2').addEventListener('click', function() {
// 	stopAllAudio();
// });

//[Math.floor(Math.random() *     ]



function startGame() {
  animal = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  lettersinWord = animal.split("");
  dashes = lettersinWord.length;


  guessesLeft = 10;
  // wrongLetters = [];
  dashesandLetters = [];

  for (let i = 0; i < animal.length; i++) {
    dashesandLetters.push('-');
  }


 let wrongLetters = document.getElementById('#wrongLetters');
 let win = document.getElementById('#win');
 let loss = document.getElementById('#loss');

document.getElementById('#animal').innerHTML = dashesandLetters.join("");
// document.getElementById('#guessesLeft').innerText = guessesLeft;
// document.getElementById('#win').innerText = win;
// document.getElementById('#loss').innerText = loss;
console.log(animal);
}

// document.getElementById("animal").innerHTML = dashes.join("  ");
document.getElementById("wrongLetters").innerHTML = wrongLetters;
document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("win").innerHTML = win;
document.getElementById("loss").innerHTML = loss;

// function checkLetters(letter) {
//     let isLetterInWord = false;
//
//     for (i = 0; i < dashes; i++) {
//       console.log(i)
//         if (animal[i] == letter) {
//             dashesandLetters[i] = letter;
//             isLetterInWord = true;
//         }
//     }
//        if (!isLetterInWord) {
//         wrongLetters.push(letter);
//         guessesLeft--;
//
//     }
//     else if (alreadyGuessed.indexOf(wrongLetters) !== -1) {
//       return false;
//       guessesLeft--;
// }
// }

function checkLetters(letter) {

    var letterInWord = false;

    for(var i = 0; i < dashes; i++){
        if (animal[i] === letter){
            letterInWord = true;

        }
    }

    if(letterInWord) {
        for (i = 0; i < dashes; i++) {
            if (animal[i] === letter) {
                dashesandLetters[i] = letter;
            }

        }

    } else {
        wrongLetters.push(letter);
          guessesLeft --
    }
}
function roundComplete() {
 console.log("Win count: " + win + "| Loss count: " + loss + "Guesses Left: " + guessesLeft);
 document.getElementById("guessesLeft").innerHTML = guessesLeft;

 if(letters.toString() === dashesandLetters.toString()) {
     		win++;
     		alert("You win!!");
     		document.getElementById('win').innerHTML = win;
     		startGame();
     	} else if(guessesLeft === 0) {
        loss++;
     		document.getElementById('loss').innerHTML = loss ++;
        alert("You lost");
        startGame();
  }
}

startGame();


document.onkeyup = function(event) {
  let guessesLeft = document.getElementById('#guessesLeft');
  console.log('dsf')
   let letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
   checkLetters(letterGuessed);
    roundComplete();
   document.getElementById('#animal').innerHTML = dashesandLetters.join("");


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







// var stopMusic = document.getElementById('#words2');
//
// stopMusic.addEventListener('click', function() {
//   audio.pause();
//
// });


 // var wrongLetters = document.getElementById('#wrongLetters');
 // var guessesLeft = document.getElementById('#guessesLeft');

// selectedWord = lettersInWord = selected.split












//Call the functions




// var stopSong = document.getElementsByClassName('.words2');
// stopSong.onClick(function() {
//   audio.pause();
// });
