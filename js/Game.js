/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /* Treehouse FSJS Techdegree
1   `Game` JS class created to handle various aspects of the `phrase Hunter` game.
2   `Game` class constructor created with 3 properties
2.1 `missed` property to store the number of times guessed wrong.
2.2 `phrases` property contains the 6 phrases used in the game.
2.3 `activePhrase` property stores the phrase currently in play.
3   `startGame` method will reset the game and set up the game screen with a random phrase and initiate the `phrase` class.
4   `getRandomPhrase` method slects a random phrase which has not already been displayed.
5   `checkPhraseDisplayed` checks if all phrases hadd been displayed atleast once. if true it sets the `phrase Displayed`
    variable to 0;
    if the random phrase is already displayed it returns false and if not displayed it returns true and push the random
    array index in the `phraseDisplayed` variable.
6   `handleInteraction` method handles user interaction to check for win, remove life and end game.
7   `resetGame` method resets the phrase, keyboard and lives when new game is initiated.
8   `checkForWin` method checks if game is won by checking if number of elements with class `letter` is equal to number of
    elements with class `show`. If true it will display the the winners screen.
9   `removeLife` method checks if letter was found in the phrase. if not it removes a life.
10  checks if `missed` property is equal to 5. if true it shows the end game screen.
11  `resetPhrase` method removes the phrase from the previous game.
12  `resetLives` sets the game missed property back to 0.
13  `resetbtn` removes the disabled button and chosen class applied to keys from the previous game.


*/

class Game {                //1
  constructor() {                 //2
   this.missed = 0;                                                                         //2.1
   this.phrases = ['I tried to embrace my inner child today and the little brat bit me',    //2.2
    'To drink responsibly is not spill it',
    'Life is a soup and I am a fork',
    'The short answer is no and the long answer is oh hell no',
    'If I send you my ugly selfies our friendship is real',
    'Welcome to the dark side where all the fun stuff happens'
  ];
  this.activePhrase = null;                                                                 //2.3
  this.phraseDisplayed = [];
  }

  startGame() {                                 //3
    this.resetGame();
    overlay.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    phrase = new Phrase(this.activePhrase)
    phrase.addPhraseToDisplay();
  }

  getRandomPhrase() {                                               //4
    i = Math.floor(Math.random() * (this.phrases.length + 1));
    while ( this.checkPhraseDisplayed(i) != true) {
      console.log(this.checkPhraseDisplayed(i))
      i = Math.floor(Math.random() * (this.phrases.length + 1));
    }
    return this.phrases[i];
  }

  checkPhraseDisplayed(i) {
    console.log(phraseDisplayed)                                  //5
    if ( phraseDisplayed.length == 6 ) {
      while ( phraseDisplayed.length > 0 ) {
        phraseDisplayed.pop();
      }
      phraseDisplayed.push(`${i}`);
      return true;
    } else {
      if ( phraseDisplayed.includes(`${i}`) ) {
        return false;
      } else {
        phraseDisplayed.push(`${i}`);
        return true;
      }
    }
  }

  handleInteraction() {                       //6

    this.checkForWin();
    this.removeLife();
    this.gameOver();
  }

  resetGame() {                                 //7
    this.resetPhrase();
    this.resetLives();
    this.resetBtn();
  }

  checkForWin() {                               //8
    if (guessChar.length === show.length) {
      overlay.style.display = 'flex';
      overlay.className = 'win';
      heading.textContent = 'CONGRATULTIONS, YOU WON!!!';
      start.textContent = 'Play Again';
    }
  }

  removeLife() {                            //9
    if ( letterFound != true ) {
      tries[game.missed].src = 'images/lostHeart.png';
      game.missed++;
    }
  }

  gameOver() {                          //10
    if ( this.missed >= 5 ) {
      overlay.style.display = 'flex';
      overlay.className = 'lose';
      heading.textContent = 'Persistence is key to SUCCESS';
      start.textContent = 'Try Again';
    }
  }

  resetPhrase() {                           //11
  while (guessChar.length > 0) {
    guessPhrase.removeChild(guessPhrase.firstChild);
  };
}

  resetLives() {                        //12
    this.missed = 0;
    i = 0;
    while (i < 5) {
      tries[i].src = 'images/liveHeart.png';
      i++;
    };
  }

  resetBtn() {                            //13
    chosen = document.getElementsByClassName('chosen');
    while ( chosen.length > 0 ) {
      chosen[0].removeAttribute('disabled');
      chosen[0].classList.remove('chosen');
    }
  }
}
