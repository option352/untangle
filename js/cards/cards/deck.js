enchant();

var DEFS = DEFS || {};

var Deck = Class.create({
  initialize:function(joker=0)
  {
    this.cards = [];
    for (var i = 0; i < 52 + joker; i++)
    {
      this.cards.push(new Card(i));
    }
    this.shuffle();
  },
  
  shuffle: function()
  {
    for (var i=0; i < 10000; i++)
    {
      var temp = this.cards.splice(Math.random() * this.cards.length, 1);
      this.cards.push(temp.pop());
    }
  },
  
  draw:function()
  {
    if (this.cards.length == 0) return;
    var ret = this.cards.pop();
    return ret;
  }
});

