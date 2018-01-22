enchant();

var cards = {};

cards.deck = [];

cards.init = function()
{
  cards.deck = [];
  for (var i=1; i<53; i++)
  {
    cards.deck.push(i);
  }
  console.log(cards.deck);
  for (var i=0; i<10000; i++)
  {
    var temp = cards.deck.splice(Math.random() * cards.deck.length, 1);
    cards.deck.push(temp.pop());
    console.log(cards.deck);
  }
}

