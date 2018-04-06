enchant();

var DEFS = DEFS || {};

var StarUI = Class.create(Group, {
  initialize:function(data)
  {
    enchant.Group.call(this);
    var r = 24;
    var edge = 4;
    
    this._data = data;
    
    var bg = new Surface(r * 2, r * 2); 
    this._bg = bg;
    bg.context.beginPath();
    bg.context.fillStyle = "rgb(0, 0, 0)";
    bg.context.arc(r, r, r, 0, Math.PI * 2, true);
    bg.context.fill();
    bg.context.beginPath();
    bg.context.fillStyle = this._data.influence.color;
    bg.context.arc(r, r, r - edge, 0, Math.PI * 2, true);
    bg.context.fill();
    
    var bgSprite = new Sprite(r * 2, r * 2);
    bgSprite.image = this._bg;
    this.addChild(bgSprite);
    
    this._units = new Label();
    this._units.textAlign = "center";
    this._units.text = this._data.unit;
    this._units.font = "16pt ÉÅÉCÉäÉI ";
    this._units.width = r * 2;
    this._units.y = r / 2;
    this.addChild(this._units);
    
    this.moveTo(data.x, data.y);
  },
  
  render:function()
  {
    var r = 24;
    var edge = 4;
    this._bg.context.beginPath();
    this._bg.context.fillStyle = "rgb(0, 0, 0)";
    this._bg.context.arc(r, r, r, 0, Math.PI * 2, true);
    this._bg.context.fill();
    this._bg.context.beginPath();
    this._bg.context.fillStyle = this._data.influence.color;
    this._bg.context.arc(r, r, r - edge, 0, Math.PI * 2, true);
    this._bg.context.fill();
  
    this._units.text = this._data.unit;
  },
  
  changeInfluence:function(team)
  {
  },
});

