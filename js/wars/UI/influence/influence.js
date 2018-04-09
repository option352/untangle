enchant();

var influence = Class.create({
  initialize:function()
  {
    this.color = "#cccccc";
    this.isProduct = false;
  },
  
  createStar:function(r=24, edge=4)
  {
    var bg = new Surface(r * 2, r * 2); 
    this.renderStar(bg, r, edge);
    
    var bgSprite = new Sprite(r * 2, r * 2);
    bgSprite.image = bg;
    
    return bgSprite;
  },
  
  renderStar:function(surface, r = 24, edge = 4)
  {
    surface.context.beginPath();
    surface.context.fillStyle = "#000000";
    surface.context.arc(r, r, r, 0, Math.PI * 2, true);
    surface.context.fill();
    surface.context.beginPath();
    surface.context.fillStyle = this.color;
    surface.context.arc(r, r, r - edge, 0, Math.PI * 2, true);
    surface.context.fill();
  },
  
  createUnit:function(num = 1)
  {
    var r = 16;
    var surface = new Surface(r * 2, r * 2); 
    this.renderUnit(surface, r, num);
    
    var sprite = new Sprite(r * 2, r * 2);
    sprite.image = surface;
    
    return sprite;
  },
  
  renderUnit:function(surface, r = 16, num = 4)
  {
    surface.context.beginPath();
    surface.context.fillStyle = this.color;
    surface.context.moveTo(r * Math.cos(Math.PI * 135 / 180) + r , r * Math.sin(Math.PI * 135 / 180) + r);
    surface.context.lineTo(r * Math.cos(Math.PI * 0 / 180) + r , r * Math.sin(Math.PI * 0 / 180) + r);
    surface.context.lineTo(r * Math.cos(Math.PI * 225 / 180) + r , r * Math.sin(Math.PI * 225 / 180) + r);
    surface.context.closePath();
    surface.context.fill();
  },

  
});

