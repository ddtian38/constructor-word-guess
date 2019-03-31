const Letter = require("./letter.js")

class Word{
    constructor(letterArray){
        for(var i = 0; i < letterArray.length; i++){

            letterArray[i] = new Letter(letterArray[i])
        }

        this.letterArray = letterArray;
    }

    displayWord(){
        var word = ""
        for(var i = 0; i < this.letterArray.length;i++){

            word += this.letterArray[i].showLetter() + " "
        }
        return word
    }

    checkGuess(letter){
        var guessedArray = []

        for(var i = 0; i < this.letterArray.length; i++){
            if(!this.letterArray[i].guessedCorrectly){
                this.letterArray[i].checkLetter(letter);

                if(this.letterArray[i].guessedCorrectly){
                    guessedArray.push(this.letterArray[i])
                }
            }
        }
   
        return guessedArray.length > 0;

    }
}


module.exports = Word;
