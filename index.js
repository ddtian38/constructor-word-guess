//Importing required Word class and inquirer NPM package.
const Word = require("./word.js")
const inquirer = require("inquirer")
const chalk = require("chalk")
//Initalizing and setting up variables.
let numOfGuess = 10;
let wordToGuess, guessCorrect = false;
//Function returns a randomly selected word
function selectWord(wordList){
    let randomWord = wordList[Math.floor(Math.random()*wordList.length)]
    return new Word(randomWord.split(""))
}

//Function runs the game
function runGame(){
    let wordList = ["chicken", "beef", "pork", "salmon", "avacado", "celery", "steak", "eggplant", "sausage", "kiwi", "strawberry", "banana", "yogurt", "boba", "sandwich", "lettuce", "carrot", "chocolate","bread", "shrimp", "fish"]
    wordToGuess = selectWord(wordList)
    console.log(wordToGuess.displayWord())
    promptUser(); 
}
//Function prompts the user to guess the letter
function promptUser(){
    if(numOfGuess > 0  && !guessCorrect){
        inquirer
        .prompt([
            {
                name:"letter",
                message:"Guess a letter!",
                //Checks if the user has inputted a signgle alphabetical letter
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
        //Game ending conditions: if the user has runned out of guesses or user has successfully guessed correctly
    }else{
        if(numOfGuess === 0){
            console.log(chalk.red.inverse("Sorry you have lost"))
        }else if(guessCorrect){
            console.log(chalk.green.inverse("You have won!"))  
        }
        //Game will reset.
        reset();   
    } 
}

//Function checks the user inputs. if they guess incorrectly, the user will lose number of guesses
function checkInput(letter){
    var validGuess = wordToGuess.checkGuess(letter);
    if(!validGuess){
        numOfGuess--;
        console.log(chalk.red.inverse("INCORRECT!!"))
        console.log("You have " + numOfGuess + " guesses left.")
    }else{
        console.log(chalk.green.inverse("CORRECT!!"))
    }
    
    console.log(wordToGuess.displayWord())
}

//Function checks if there is any blanks
function blankChecker(wordDisplay){
    return wordDisplay.match(/[_]+/)
}

//Function resets game
function reset(){
    numOfGuess = 10;
    guessCorrect = false;
    runGame();
}

//Running main game function
runGame();