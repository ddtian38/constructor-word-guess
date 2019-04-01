const Word = require("./word.js")
const inquirer = require("inquirer")

let numOfGuess = 10;
let wordToGuess, guessCorrect = false;

function selectWord(wordList){
    let randomWord = wordList[Math.floor(Math.random()*wordList.length)]
    return new Word(randomWord.split(""))
}

function runGame(){
    let wordList = ["chicken", "beef", "pork", "salmon", "avacado", "celery", "steak", "eggplant"]
    wordToGuess = selectWord(wordList)
    console.log(wordToGuess)
    promptUser(); 
}

function promptUser(){
    if(numOfGuess > 0  && !guessCorrect){
        inquirer
        .prompt([
            {
                name:"letter",
                message:"Guess a letter!",
                validate: function(value){
                    if(value.match(/[a-zA-Z]/) && value.length === 1){
                        return true
                    }
                    return false;
                    
                }
            }
        ]).then(function(answer){
            checkInput(answer.letter);
            guessCorrect = (!blankChecker(wordToGuess.displayWord()))
            promptUser();
        })
    }else{
        if(numOfGuess === 0 || !guessCorrect){
            console.log("Sorry you have lost")
        }else if(guessCorrect){
            console.log("You have won!")  
        }
        reset();   
    } 
}

function checkInput(letter){
    var validGuess = wordToGuess.checkGuess(letter);
    if(!validGuess){
        numOfGuess--;
    }
    console.log("You have " + numOfGuess + " guesses left.")
    console.log(wordToGuess.displayWord())
}

function blankChecker(wordDisplay){
    return wordDisplay.match(/[_]+/)
}

function reset(){
    numOfGuess = 10;
    guessCorrect = false;
    runGame()
}

//Running main game function
runGame()

