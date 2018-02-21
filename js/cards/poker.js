enchant();

var DEFS = DEFS || {};

DEFS.POKER = {};
DEFS.POKER.HAND = {};
DEFS.POKER.HAND.HIGH_CARD      = 0;
DEFS.POKER.HAND.ONE_PAIR       = 1;
DEFS.POKER.HAND.TWO_PAIR       = 2;
DEFS.POKER.HAND.THREE_OF_KIND  = 3;
DEFS.POKER.HAND.STRAIGHT       = 4;
DEFS.POKER.HAND.FLASH          = 5;
DEFS.POKER.HAND.FULL_HOUSE     = 6;
DEFS.POKER.HAND.FOUR_OF_KIND   = 7;
DEFS.POKER.HAND.STRAIGHT_FLASH = 8;

var Poker = Class.create({
  initialize:function()
  {
  },
  
  checkHand:function(hand)
  {
    var pair = this.checkPair(hand);
    console.log(pair);
    if(pair == 1) return DEFS.POKER.HAND.ONE_PAIR;
    if(pair == 2) return DEFS.POKER.HAND.TWO_PAIR;
    if(pair == 3) return DEFS.POKER.HAND.THREE_OF_KIND;
    if(pair == 4) return DEFS.POKER.HAND.FULL_HOUSE;
    if(pair == 6) return DEFS.POKER.HAND.FOUR_OF_KIND;
    
    var isStraight = this.checkStraight(hand);
    var isFlash = this.checkFlash(hand);
    
    console.log(isStraight, isFlash);
    if (isStraight && isFlash) return DEFS.POKER.HAND.STRAIGHT_FLASH;
    if (isStraight) return DEFS.POKER.HAND.STRAIGHT;
    if (isFlash) return DEFS.POKER.HAND.FLASH;
    return DEFS.POKER.HAND.HIGH_CARD;
  },
  
  checkPair:function(hand)
  {
    
    var ret = 0;
    var length = hand.length;
    
    console.log(length);
    if(length != 5) return -1;
    
    for (var i = 0; i < length - 1; i++)
    {
      var c1 = hand[i];
      for (var j = i + 1; j < length; j++)
      {
        var c2 = hand[j];
        ret += c1.getNumber() == c2.getNumber() ? 1 : 0;
      }
    }
    
    return ret;
  },
  
  checkStraight:function(hand)
  {
    var max = 0;
    var min = 15;
    for (var i = 0; i < length; i++)
    {
      var number = hand[i].getNumber();
      max = max < number ? number : max;
      min = min > number ? number : min;
    }
    
    return max - min == 4;
    
  },
  
  checkFlash:function(hand)
  {
    var length = hand.length;
    if(length != 5) return false;
    
    var first = hand[0];
    for (var i = 1; i < length; i++)
    {
      var card = hand[i];
      if(first.getSuit() != card.getSuit())
        return false;
    }
    
    return true;
  },
  
  
});
