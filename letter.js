class Letter{

    constructor(letter){
        this.letter = letter;
        this.guessed = false;
    }

    showLetter(){
        if (!this.guessed){
            return "_"
        }
        return this.letter
    }

    check(l){
            this.guessed = (l === this.letter);

    }

}

module.exports = Letter;

// let letter = new Letter("a")
// console.log(letter)
// letter.check("a");
// console.log(letter)
// console.log(letter.display())