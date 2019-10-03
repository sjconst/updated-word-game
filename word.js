const letters = require("./letter");

class Word {
    constructor(arr){
        //An array of `new` Letter objects representing the letters of the underlying word
        this.arr = arr; 
    }
    //A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    repWord(){
        let getString = "";
        this.arr.forEach(function(element) {
            getString += `${element.getChar()} `;       
        })  
        return getString;         
    }
    //A function that takes a character as an argument and calls the guess function on each letter object
    getGuess(char){
        this.arr.forEach(function(element) {
            element.checkGuess(char)
        });
    }    
}
module.exports = {
    Word: Word
}