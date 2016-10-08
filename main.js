/* code no longer being used in project for unit 11 bc it was built over
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


if (cardOne === cardTwo) {
	alert('You found a match!');
}
else if (cardThree === cardFour) {
  alert("You found a match!");
}
else if (cardOne === cardThree) {
  alert("Sorry, try again");
}
else if (cardTwo === cardFour) {
  alert("Sorry, try again.");
}
else {
	alert("Sorry, try again.");
}
*/

/* // attempt at trying the unit 11 project on my own below.

var board = document.getElementById('game-board');
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];


function createBoard() {

  for (var i=0; i<cards.length; i++) {

    var cardElement = document.createElement('div');

    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    cardElement.addEventListener('click', isTwoCards)  

    board.appendChild(cardElement);
  }

}



function isMatch() {
  if (cards[0] === cards[1]) {
    alert('A Match!')
  } else {
    alert('Sorry, not a match.')
  }
}

function isTwoCards (){

  cardsInPlay.push(this.getAttribute('data-card'));

  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king'){
    this.innerHTML = "<img src = 'king-card.png'>";
  } else {
    this.innerHTML = "<img src='queencard.png'>";
  }

  if (cardsInPlay.length === 2){

    isMatch(cardsInPlay);

    cardsInPlay = [];
  }
}
}
*/

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];


var board = document.getElementById('game-board');

function createBoard() {

  for (var i=0; i<cards.length; i++) {

    var cardElement = document.createElement('div');

    cardElement.className = 'card';

    cardElement.setAttribute('data-card', cards[i]);

    cardElement.addEventListener('click', isTwoCards);

    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }

}

function isTwoCards() {

  cardsInPlay.push(this.getAttribute('data-card'));

  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = "<img src='./king-card.png'>"; // king
  } else {
    this.innerHTML = "<img src='./queen-card.png'>"; //queen
  }

  if (cardsInPlay.length === 2) {

    isMatch(cardsInPlay);

    cardsInPlay = [];
  }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();
