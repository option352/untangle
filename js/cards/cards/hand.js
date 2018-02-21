enchant();

var DEFS = DEFS || {};

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
  
  getHand:function()
  {
    
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


