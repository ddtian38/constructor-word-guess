//Letter class has two attributes: this.letter is the character itself. this.guessedCorrectly is a boolean that indicates if that character has been guessed correctly.
class Letter{
    constructor(letter){
        this.letter = letter;
        this.guessedCorrectly = false;
    }

    //Function will return an "_" if the character has not been guessed correctly; Else it will show the letter.
    showLetter(){
        if (!this.guessedCorrectly){
            return "_"
        }
        return this.letter
    }

    //Function takes the inputted letter as an argument and compares it with the letter attribute to check if it matches.
    checkLetter(l){
        //If letter has not been guessed correctly
            this.guessedCorrectly = (l === this.letter);
    }

}

module.exports = Letter;
