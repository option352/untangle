enchant();

var STATICS = STATICS || {};

STATICS.CELL_IMAGE  = "./img/sudoku/flame.png";
STATICS.CELL_WIDTH  = 64;
STATICS.CELL_HEIGHT = 64;

var Cell = Class.create(Group, {

  initialize: function(game, symbol = 0)
  {
    enchant.Group.call(this, STATICS.CELL_WIDTH, STATICS.CELL_HEIGHT);
    var sprite = new Sprite(STATICS.CELL_WIDTH, STATICS.CELL_HEIGHT);
    sprite.image = game.assets[STATICS.CELL_IMAGE];
    this.addChild(sprite);
    
    this.symbol = symbol;
    
    this.symbolLabel = new Label();
    this.symbolLabel.x = 20 + 6;
    this.symbolLabel.y = 20 + 0;
    this.symbolLabel.font = "18px '���C���I'";
    
    this.updateLabel();
    this.addChild( this.symbolLabel );
  },
  
  ontouchstart: function()
  {
    this.symbol = (this.symbol + 1) % 10;
    this.updateLabel();
  },
  
  updateLabel: function()
  {
    this.symbolLabel.text = this.symbol;
    this.symbolLabel.visible = this.symbol != 0;
  }
  
});

//���s���̊֐��i�����֐��j���폜
//this.removeEventListener("touchstart", arguments.callee);

