enchant();

var DEFS = DEFS || {};
DEFS.LINE = DEFS.LINE || {};

DEFS.LINE.DEFAULT_COLOR = "rgb(0, 128, 0)";
DEFS.LINE.CROSS_COLOR = "rgb(128, 0, 0)";
DEFS.LINE.DEFAULT_THICK = 3;
DEFS.LINE.MOVING_THICK  = 5;

var LineSegment = Class.create({
  initialize:function(p, q)
  {
    this.startPoint = p;
    this.endPoint = q;
    this.isCross = false;
    this.isMove = false;
  },
  
  render:function(context)
  {
    var radius = DEFS.VERTEX.RADIUS;
    context.beginPath();
    context.moveTo(this.startPoint.x + radius, this.startPoint.y + radius);
    context.lineTo(this.endPoint.x + radius, this.endPoint.y + radius);
    context.closePath();
    context.lineWidth = this.isMove ? DEFS.LINE.MOVING_THICK : DEFS.LINE.DEFAULT_THICK;
    context.strokeStyle = this.isCross ? DEFS.LINE.CROSS_COLOR : DEFS.LINE.DEFAULT_COLOR;
    context.stroke();
    
  },
  
  getVector:function()
  {
    return new Vector2d(this.endPoint.x - this.startPoint.x, this.endPoint.y - this.startPoint.y);
  }
});


