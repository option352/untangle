enchant();

var DEFS = DEFS || {};

var StarUI = Class.create(Group, {
  initialize:function(data)
  {
    enchant.Group.call(this);
    var r = 24;
    var edge = 4;
    
    this._data = data;
    
    var star = this._data.influence.createStar();
    
    this._bg = star.image;
    this.addChild(star);
    
    this._units = new Label();
    this._units.textAlign = "center";
    this._units.text = this._data.unit;
    this._units.font = "16pt ÉÅÉCÉäÉI ";
    this._units.width = r * 2;
    this._units.y = r / 2;
    this.addChild(this._units);
    
    this.moveTo(data.x, data.y);
    
    this.addChild(this._data.influence.createUnit());
  },
  
  render:function()
  {
    this._data.influence.renderStar(this._bg);
    this._units.text = this._data.unit;
  },
  
  changeInfluence:function(team)
  {
  },
});

