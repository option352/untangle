enchant();

var gameScene = Class.create(Scene, {
  initialize: function(nodes, lines)
  {
    enchant.Scene.call(this);
    enchant.Core.instance.fps = 24;
    this.backgroundColor = "rgb(255, 180, 255)";
    
    this.nodeArray = nodes;
    this.lineArray = lines;
    
    this.lineLayer = new Sprite(960, 960);
    this.lineSurface = new Surface(960, 960);
    
    this.lineLayer.image = this.lineSurface;
    this.addChild(this.lineLayer);
    
    var length = this.nodeArray.length;
    var center = 480;
    var r = 240;
    
    for (var i = 0; i < length; i++)
    {
      var point = this.nodeArray[i];
      point.x = center + r * Math.cos(Math.PI * 2 * i / length);
      point.y = center + r * Math.sin(Math.PI * 2 * i / length);
      this.addChild(point);
    }
    
    this.render();
    
    this.scale = 4;
    this.touchX = 0;
    this.touchY = 0;
  },
  
  ontouchstart:function(e)
  {
    this.touchOrigin = new Vector2d(e.x, e.y);
    this.touchX = e.x;
    this.touchY = e.y;
  },
  
  ontouchend:function(e)
  {
    var v = new Vector2d(e.x - this.touchOrigin.x, e.y - this.touchOrigin.y);
    
    if(v.force() < 5)
    {
      this.scale = this.scale < 6 ? this.scale + 1 : 2;
      this.scaleX = this.scale / 4;
      this.scaleY = this.scale / 4;
    }
  },
  
  ontouchmove:function(e)
  {
    this.x += e.x - this.touchX;
    this.y += e.y - this.touchY;
    this.touchX = e.x;
    this.touchY = e.y;
  },
  
  onenterframe:function(e)
  {
    this.checkCross();
    this.render();
  },
  
  render:function()
  {
    var context = this.lineSurface.context;
    context.clearRect(0, 0, this.lineSurface.width, this.lineSurface.height);
    for (var i = 0; i < this.lineArray.length; i++)
    {
      this.lineArray[i].render(context);
    }
  },
  
  checkCrossLine:function(target)
  {
    var length = this.lineArray.length;
    var ret = false;
    for (var i = 0; i < length; i++)
    {
      var line = this.lineArray[i];
      var vec1 = new LineSegment(line.startPoint, target.startPoint).getVector();
      var vec2 = new LineSegment(line.startPoint, target.endPoint).getVector();
      var vec3 = new LineSegment(target.startPoint, line.startPoint).getVector();
      var vec4 = new LineSegment(target.startPoint, line.endPoint).getVector();
      
      var v1 = line.getVector().crossProduct(vec1);
      var v2 = line.getVector().crossProduct(vec2);
      var v3 = target.getVector().crossProduct(vec3);
      var v4 = target.getVector().crossProduct(vec4);
      
      ret = ret || (v1 * v2) < 0 && (v3 * v4) < 0;
    }
    return ret;
  },
  
  checkCross:function()
  {
    var length = this.lineArray.length;
    for (var i = 0; i < length; i++)
    {
      this.lineArray[i].isCross = false;
    }
    for (var i = 0; i < length; i++)
    {
      var line = this.lineArray[i];
      //if (line.isCross) continue;
      for (var j = i + 1; j < length; j++)
      {
        var target = this.lineArray[j];
        
        var vec1 = new LineSegment(line.startPoint, target.startPoint).getVector();
        var vec2 = new LineSegment(line.startPoint, target.endPoint).getVector();
        var vec3 = new LineSegment(target.startPoint, line.startPoint).getVector();
        var vec4 = new LineSegment(target.startPoint, line.endPoint).getVector();
        
        var v1 = line.getVector().crossProduct(vec1);
        var v2 = line.getVector().crossProduct(vec2);
        var v3 = target.getVector().crossProduct(vec3);
        var v4 = target.getVector().crossProduct(vec4);
        
        //console.log(line, target, v1, v2, v3, v4);
        if((v1 * v2) < 0 && (v3 * v4) < 0)
        {
          line.isCross = true;
          target.isCross = true;
        }
      }
    }
  }
  
});

