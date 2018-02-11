enchant();

var DEFS = DEFS || {};
DEFS.VERTEX = DEFS.VERTEX || {};

DEFS.VERTEX.WIDTH = 32;
DEFS.VERTEX.HEIGHT = 32;
DEFS.VERTEX.RADIUS = DEFS.VERTEX.WIDTH / 2;
DEFS.VERTEX.OUTERCOLOR = "rgb(0, 0, 0)";
DEFS.VERTEX.INNERCOLOR = "rgb(192, 255, 255)";

var Vertex = Class.create(Sprite, {

  initialize:function()
  {
    enchant.Sprite.call(this, DEFS.VERTEX.WIDTH, DEFS.VERTEX.HEIGHT);
    
    this.surface = new Surface(DEFS.VERTEX.WIDTH, DEFS.VERTEX.HEIGHT);
    
    var context = this.surface.context;
    var radius = DEFS.VERTEX.RADIUS;
    //â~ÇÃï`âÊèàóù
    context.beginPath();
    context.fillStyle = DEFS.VERTEX.OUTERCOLOR;
    context.arc(radius, radius, radius, 0, Math.PI * 2, true);
    context.fill();
    context.beginPath();
    context.fillStyle = DEFS.VERTEX.INNERCOLOR;
    context.arc(radius, radius, radius - 2, 0, Math.PI * 2, true);
    context.fill();
    
    //SpriteÇ…ï`âÊÇµÇΩâ~Çìoò^
    this.image = this.surface;
    
  }
});
