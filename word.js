const Letter = require("./letter.js")

class Word{
    constructor(letterArray){
        this.letterArray = letterArray;
    }

    displayWord(){
        var word = ""
        for(var i = 0; i < this.letterArray.length;i++){
            word += this.letterArray[i].showLetter() + " "
        }
        return word
    }

    checkLetter(letter){
        console.log(this.letterArray.length)
        for(var i = 0; i < this.letterArray.length; i++){
           this.letterArray[i].check(letter);
           console.log(i)
           console.log(this.letterArray[i].guessed)
        }
       
    }
}

var letters = [new Letter("a"), new Letter("b"), new Letter("c")]
let word = new Word(letters)
console.log(word)
console.log(word.displayWord())
word.checkLetter("a");
