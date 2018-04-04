enchant();

var DEFS = DEFS || {};

var StarUI = Class.create(Group, {
  initialize:function(data)
  {
    enchant.Group.call(this);
    var r = 32;
    var edge = 4;
    
    this._data = data;
    data.observer.addObserver(this.render);
    
    
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
    
    console.log(this);
    
  },
  
  render:function(object)
  {
    console.log(object);
    this._units.text = this._data.unit;
  }
});

