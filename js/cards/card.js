enchant();

var DEFS = DEFS || {};

DEFS.CARD = DEFS.CARD || {};

DEFS.CARD.WIDTH = 48;
DEFS.CARD.HEIGHT = 64;

DEFS.CARD.ID = DEFS.CARD.ID || {};
DEFS.CARD.ID.JOKER = 52;

DEFS.CARD.NUMBER = DEFS.CARD.NUMBER || {};
DEFS.CARD.NUMBER.ACE   = 1;
DEFS.CARD.NUMBER.TEN   = 10;
DEFS.CARD.NUMBER.JACK  = 11;
DEFS.CARD.NUMBER.QWEEN = 12;
DEFS.CARD.NUMBER.KING  = 13;
DEFS.CARD.NUMBER.Strings = {}
DEFS.CARD.NUMBER.Strings[DEFS.CARD.NUMBER.ACE]   = "A"
DEFS.CARD.NUMBER.Strings[DEFS.CARD.NUMBER.TEN]   = "T"
DEFS.CARD.NUMBER.Strings[DEFS.CARD.NUMBER.JACK]  = "J"
DEFS.CARD.NUMBER.Strings[DEFS.CARD.NUMBER.QWEEN] = "Q"
DEFS.CARD.NUMBER.Strings[DEFS.CARD.NUMBER.KING]  = "K"

DEFS.CARD.SUIT = DEFS.CARD.SUIT || {};
DEFS.CARD.SUIT.SPADE = 0;
DEFS.CARD.SUIT.HEART = 1;
DEFS.CARD.SUIT.DIA   = 2;
DEFS.CARD.SUIT.CRAB  = 3;
DEFS.CARD.SUIT.Strings = {};
DEFS.CARD.SUIT.Strings[DEFS.CARD.SUIT.SPADE] = "s";
DEFS.CARD.SUIT.Strings[DEFS.CARD.SUIT.HEART] = "h";
DEFS.CARD.SUIT.Strings[DEFS.CARD.SUIT.DIA]   = "d";
DEFS.CARD.SUIT.Strings[DEFS.CARD.SUIT.CRAB]  = "c";


var Card = Class.create({
  initialize:function(id = 0)
  {
    this.id = id;
    this.group = new Group(DEFS.CARD.WIDTH, DEFS.CARD.HEIGHT);
    this.sprite = new Sprite(DEFS.CARD.WIDTH, DEFS.CARD.HEIGHT);
    this.bg = new Surface(DEFS.CARD.WIDTH, DEFS.CARD.HEIGHT);
    this.label = new Label(this.toString());
    //this.label.font = "32pt ÉÅÉCÉäÉI";
    this.label.font = "48pt NKS24 Playing Cards";
    this.label.x = 0;
    this.label.y = 0;
    this.sprite.image = this.bg;
    this.group.addChild(this.sprite);
    this.group.addChild(this.label);
    this.render();
  },
  
  toString:function()
  {
    if (this.id == DEFS.CARD.ID.JOKER) return "\u002f";
    
    var ret = this.id < 26 ? "\u0041" : "\u0061";
    ret = ret.charCodeAt(0);
    ret += this.id < 26 ? this.id : this.id - 26;
    
    return String.fromCharCode(ret);
  },
  
  render:function()
  {
    var r = 8;
    var context = this.bg.context;
    context.fillStyle = "#888888";
    context.beginPath();
    
    context.arc(r, r, r, -Math.PI, -Math.PI / 2, false);
    context.arc(DEFS.CARD.WIDTH - r, r, r, -Math.PI / 2, 0, false);
    context.arc(DEFS.CARD.WIDTH - r, DEFS.CARD.HEIGHT - r, r, 0, Math.PI / 2, false);
    context.arc(r, DEFS.CARD.HEIGHT - r, r, Math.PI / 2, Math.PI, false);
    
    context.closePath();
    context.fill();
  }
});

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
    for (var i=0; i<10000; i++)
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

DEFS.HAND = DEFS.HAND || {};

DEFS.HAND.WIDTH  = 400;
DEFS.HAND.HEIGHT = 80;

var Hand = Class.create({
  initialize:function()
  {
    this.cards = [];
    this.group = new Group()
    this.bg = new Sprite(DEFS.HAND.WIDTH, DEFS.HAND.HEIGHT);
    this.bg_img = new Surface(DEFS.HAND.WIDTH, DEFS.HAND.HEIGHT);
    
    this.bg.image = this.bg_img;
    this.group.addChild(this.bg);
    var context = this.bg_img.context
    context.fillStyle = "#ff0000";
    context.fillRect(0, 0, DEFS.HAND.WIDTH, DEFS.HAND.HEIGHT);
  },
  
  addHand:function(card)
  {
    this.cards.push(card);
    this.group.addChild(card.group);
    
    console.log(card.id, card.toString(), card.toString().charCodeAt(0).toString(16));
    this.render();
  },
  
  useHand:function(index)
  {
    var card = this.cards.
    this.render();
  },
  
  render : function()
  {
    var length = this.cards.length;
    var left = (DEFS.HAND.WIDTH - 40 - (DEFS.CARD.WIDTH * length) - (10 * (length - 1))) / 2;
    for (var i = 0; i < length; i++)
    {
      var card = this.cards[i];
      card.group.x = (DEFS.CARD.WIDTH + 10) * i + left;
      card.group.y = 10;
    }
  }
  
});


