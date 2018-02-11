enchant();

var DEFS = DEFS || {};
DEFS.LINE = DEFS.LINE || {};

DEFS.LINE.DEFAULT_COLOR = "rgb(0, 128, 0)";
DEFS.LINE.DEFAULT_THICK = 3;

var LineSegment = Class.create({
  initialize:function(p, q)
  {
    this.startPoint = p;
    this.endPoint = q;
  },
  
  render:function(context)
  {
    var radius = DEFS.VERTEX.RADIUS;
    context.beginPath();
    context.moveTo(this.startPoint.x + radius, this.startPoint.y + radius);
    context.lineTo(this.endPoint.x + radius, this.endPoint.y + radius);
    context.closePath();
    context.lineWidth = DEFS.LINE.DEFAULT_THICK;
    context.strokeStyle = DEFS.LINE.DEFAULT_COLOR;
    context.stroke();
    
  }
});


