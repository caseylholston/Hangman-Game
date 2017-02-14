console.log("This is the javascript file");

//Declare Global Variables
	var wordBank = ["One", "Two", "Three", "Four", "Five"]
	var currentWord;
	var gameState = {
		player : {
			score: {
				wins :0,
				losses :0,
			},
			guessesLeft : 12,
			guesses : 0,
		}
	};