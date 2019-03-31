class Letter{

    constructor(letter){
        this.letter = letter;
        this.guessedCorrectly = false;
    }

    showLetter(){
        if (!this.guessedCorrectly){
            return "_"
        }
        return this.letter
    }

    checkLetter(l){
        //If letter has not been guessed correctly
            this.guessedCorrectly = (l === this.letter);
            return this.guessedCorrectly


    }

}

module.exports = Letter;

// let letter = new Letter("a")
// console.log(letter)
// letter.check("a");
// console.log(letter)
// console.log(letter.display())