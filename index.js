const inquirer = require("inquirer");
const words = require("./word");
const letters = require("./letter");
var fs = require('fs');
console.log("Words loading....");
//Load word list
var wordList = fs.readFileSync('words.txt', 'utf8').split('\n');
function reduceWords(list){
    for(var i = 0; i < list.length; i++){
        if(list[i].length < 4){
            list.splice(i, 1);
        }
    }
}
//remove small words from word list
reduceWords(wordList);
//get random word from word list
var currentWord = (wordList[Math.floor((Math.random() * wordList.length))]).toLowerCase();
//create new letter object for every letter in word and store in array
var letterArr = [];
function createObj(str){
    for(var i = 0; i < str.length; i++){
        var x = new letters.Letter(str[i], false);
        letterArr.push(x);
    }
}
createObj(currentWord);
var wordObj = new words.Word(letterArr);
//Prompt user for guess
var numGuesses = 8;
function getPrompt(){        
    if(numGuesses > 0){
        var displayLetters = wordObj.repWord(); 
        if(displayLetters.indexOf("_") === -1){
            console.log("You won!");
            return;
        }
        inquirer
        .prompt([
            {
                name: "guess",
                message: `${displayLetters} \n You have ${numGuesses} guesses remaining. Guess a letter: `
            }
        ])
        .then(function(response){ 
            let userInput = response.guess.toLowerCase();   
            numGuesses--;
            wordObj.getGuess(userInput);   
            console.log(`word object ${wordObj.arr[0].guessed}`);        
            getPrompt();
        })
    } else {
        console.log("Sorry, you're out of guesses, you lose")
    }
}
getPrompt();


