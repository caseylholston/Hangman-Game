console.log("This is the javascript file");

//Declare Global Variables
	var wordBank = ["one", "two", "three", "four", "five"]
	var gameState = {
			score: {
				wins :0,
				losses :0,
			},
		};
	var currentWord;
	var maskedWord =[];
	var lettersGuessed =[];
	var guessesMade = 0;
	var guessesLeft = 12;
	// Select the Current Word
	
	var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];

	//Convert Current Word into Blanks

	for(i=0; i < currentWord.length; i++) {
		maskedWord[i] = "_"		
	}


// When the user presses a key, it will run the following function...
    document.onkeyup = function(event) {

// Determine which key was pressed	
	var currentGuess = event.key;
	lettersGuessed.push(currentGuess);

	var guessesLeft = (12-(lettersGuessed.length))
	console.log(currentGuess);

	for (var i = 0; i < currentWord.length; i++){
		if(currentWord[i] === currentGuess){
			maskedWord[i] = currentGuess + " ";
			var correctGuess = true;
		}
		else if (currentGuess = "");
	}



//    var targetDiv = document.getElementById("empty-div");

//       targetDiv.innerHTML = "Hello friends!";

//       var newDiv = document.createElement("div");
//       newDiv.innerHTML = "A pleasure to meet you!";

//       targetDiv.appendChild(newDiv);

//       // We then apply that CSS to our newDiv.
//       newDiv.setAttribute("class", "fancy");
	
// // Compares current Guess to Word Letters
// 		// if (currentGuess ===WordLetters) {

// 		// }

}
