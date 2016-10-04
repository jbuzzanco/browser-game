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