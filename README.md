# CLI Hangman Game

## Getting Started

This is a CLI app that fetches a random word from a dictionary and prompts the user for guesses. 

![hangman3](https://user-images.githubusercontent.com/42453320/66151296-d79ca580-e5cb-11e9-87cc-a4dbe3510b02.gif)

## Technical Approach

Three .js files and two classes build on top of each other to dynamically create a new word object containing an array of letter objects. Word object methods then build on letter object methods to check the user's guess and display either a character or underscore. 

Features include:

* Inquirer npm package for prompting. Template literal language in the message updates the user on the score and status of the word before each guess. 
* Challenges included fixing a bug that omitted previously rendered letters. By adding "|| guess === true" to the checkGuess function in the letter class, I ensured the getGuess method also rendered previously guessed characters.
* When exporting classes/constructors, need to specify key value pair if class not saved in variable. 

## Instructions

Files in this repo contain a very handy words.txt file that can be read and uploaded into a word list, to dynamically pick a random word for guessing. 

When word is guessed, displays "you won" and exits game. 
![hangman1](https://user-images.githubusercontent.com/42453320/66151241-be93f480-e5cb-11e9-8b83-1b3829626fa3.gif)

Likewise, if no remaining guesses left, displays "you lose" and exits game. 
![hangman2](https://user-images.githubusercontent.com/42453320/66151271-cce21080-e5cb-11e9-89c4-7cd8a12fee53.gif)

## Technologies Used

* JavaScript
* Node.js
* Inquirer npm packages

## Authors 

* Stephanie Lake - (https://github.com/sjconst)