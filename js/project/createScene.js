enchant();

var createScene = Class.create(Scene, {
  initialize: function()
  {
    enchant.Scene.call(this);
    this.backgroundColor = "rgb(180, 180, 255)";
    
    this.nodeArray = [];
    this.lineArray = [];
    
    var allLines = [];
    this.unselectLines = [];
    
    this.lineLayer = new Sprite(960, 960);
    this.lineSurface = new Surface(960, 960);
    
    this.lineLayer.image = this.lineSurface;
    this.addChild(this.lineLayer);
    
    for (var i = 0; i < 25; i++)
    {
      var point = new Vertex();
      var tooNear = false;
      do
      {
        point.x = (Math.floor(Math.random() * (960 - 32)));
        point.y = (Math.floor(Math.random() * (960 - 32)));
        tooNear = false;
        for (var j = 0; j < this.nodeArray.length; j++)
        {
          tooNear = tooNear || new LineSegment(this.nodeArray[j], point).getVector().force() < 32;
        }
      }while(tooNear);
      
      var len = this.nodeArray.length
      for (var j = 0; j < len; j++)
      {
        allLines.push(new LineSegment(this.nodeArray[j], point));
      }
      
      this.nodeArray.push(point);
      this.addChild(point);
      
    }
    
    this.unselectLines = this.unselectLines.concat(allLines);
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
    if(this.unselectLines == 0)
    {
      console.log("change scene");
      enchant.Core.instance.replaceScene(new gameScene(this.nodeArray, this.lineArray));
    }
    this.addLines();
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
  
  addLines:function()
  {
    if (this.unselectLines == 0)
    {
      this.backgroundColor = "rgb(180, 180, 180)";
      return;
    }
    var line;
    do
    {
      var index = Math.random() * this.unselectLines.length | 0;
      line = this.unselectLines.splice(index, 1)[0];
      if(this.checkCrossLine(line))
        line = undefined;
    }while(line == undefined && this.unselectLines.length > 0);
    if(line != undefined)
    {
      this.lineArray.push(line);
      this.checkCross();
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

