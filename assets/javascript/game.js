console.log("This is the javascript file");

//Declare Global Variables
	var wordBank = ["one", "two", "three", "four", "five"]
	var gameState = {
			score: {
				wins :0,
				losses :0,
			},
			guessesLeft : 12,
			guessesMade : 0,
	
		};
	var currentWord;
	var lettersGuessed =[];
	var wordState = {
		blanksLeft: 3,
		wordLetters: ["o","n","e"]
	};
	// Select the Current Word
	var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
	console.log(currentWord);

// When the user presses a key, it will run the following function...
      document.onkeyup = function(event) {

// Determine which key was pressed	
	var currentGuess = event.key;
	lettersGuessed.push(currentGuess);

	console.log(currentGuess);
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
