class Letter {
    constructor(character, guessed){
        //A string value to store the underlying character for the letter
        this.character = character;
        //A boolean value that stores whether that letter has been guessed yet
        this.guessed = guessed;    
    }
    //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    getChar(){
        if(this.guessed){
            return this.character;
        }else{
            return "_";
        }
    }
    //A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    checkGuess(char){       
        if(char === this.character || this.guessed === true){
             this.guessed = true;            
        } else {
            this.guessed = false;           
        }
    }
}
module.exports = {
    Letter: Letter
}