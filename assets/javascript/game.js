var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var lettersGuessed;

var wins = 0;
var losses = 0;
var guesses = 10;


function newGame() { 
guesses = 10;
lettersGuessed = [];
computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice)

}

document.onkeypress = function() {
    

    var userGuess = event.key;
		
    if(userGuess === computerChoice){
        wins++;
        var html = 
        newGame()
    }else{
        guesses--;
        lettersGuessed.push(userGuess)
        console.log(guesses)
    }

    if(guesses === 0){
        losses++
        newGame()
    }
    var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guesses + "</p>" +
          "<p>Letters Guessed: " + lettersGuessed.join(", ") + "</p>";
          document.querySelector("#wins").innerHTML = html;
}
newGame();