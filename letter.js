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
    }

}

module.exports = Letter;
