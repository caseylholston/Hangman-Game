console.log("This is the javascript file");

//Declare Global Variables
	var wordBank = ["shawnkemp", "juliuserving", "michaeljordan", 
					"dominiquewilkins", "vincecarter"]
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
	var guessesLeft = 15;


	// Select the Current Word
	
	var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];


	//Convert Current Word into Blanks

	for(i=0; i < currentWord.length; i++) {
		maskedWord[i] = "_ "		
	}
	var wordState = currentWord.indexOf("_");

	var targetDiv = document.getElementById("currentWord");

      targetDiv.innerHTML = maskedWord;


// When the user presses a key, it will run the following function...
    document.onkeyup = function(event) {

// Determine which key was pressed	
	var currentGuess = event.key;
	
	var targetDiv = document.getElementById("guesses");
    targetDiv.innerHTML = lettersGuessed + " ";

	
	console.log(currentGuess);

	for (var i = 0; i < currentWord.length; i++){
		if(currentWord[i] === currentGuess){
			maskedWord[i] = currentGuess + " ";
			var correctGuess = true;
			
		}
		else correctGuess =false;
		var targetDiv = document.getElementById("currentWord");

      	targetDiv.innerHTML = maskedWord;
	
	}
	guessesLeft--;
	guessesMade++;
	lettersGuessed.push(currentGuess);

	var targetDiv = document.getElementById("guessesLeft");
    targetDiv.innerHTML = guessesLeft;

    var wordState = currentWord.indexOf("_");



    //Check to see if game is over or won
    
    
   	var finished = true;
	for (var i = 0; i < maskedWord.length; i++){
		if(maskedWord[i] === "_ "){
			finished = false;
		}
	}
	if(finished){
		alert("You Didn't Fake the Funk on Your Nasty Dunk");
		var targetDiv = document.getElementById("video");
      	targetDiv.innerHTML = ('<iframe width="560" height="315" src="https://www.youtube.com/embed/XMrPjl-927Q" frameborder="0" allowfullscreen></iframe>');
    }
	if (guessesLeft <1){
		alert("You've Been Posterized")
		var targetDiv = document.getElementById("video");
      	targetDiv.innerHTML = ('<iframe width="560" height="315" src="https://www.youtube.com/embed/EebuaDemic8" frameborder="0" allowfullscreen></iframe>')
	}

}
