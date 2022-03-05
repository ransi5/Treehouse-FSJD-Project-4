/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 /*
 variables
 */

const start = document.querySelector('#btn__reset');
var game, phrase;

/*
1   Eventlistener hears for user click to play the game and initiates a new `Game` class and applie the `startGame` method.
2   Eventlistener listens for user interaction with on screen keyboard and applies the `Game` and `handleInteraction` method.
3   Eventlistener handles user interaction through the manual keyboard and applies the 'Phrase' and `Game` `handleInteraction` method.
*/

start.addEventListener('click', () => {
  game = new Game();
  game.startGame();
})

qwerty.addEventListener('click', (event)=>{
  if ( event.target.tagName == 'BUTTON' ) {
    game.activePhrase.handleInteraction(event);
    game.handleInteraction();
  }
})

document.addEventListener('keyup', (event) => {
  game.activePhrase.handleInteraction(event);
  game.handleInteraction();
})
