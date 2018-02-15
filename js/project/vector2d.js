var Vector2d = function(x, y)
{
  this.x = x;
  this.y = y;
  
  this.force = function()
  {
    return Math.sqrt(x * x + y * y);
  }
  
  this.multi = function(s)
  {
    return new Vector2d(x * s, y * s)
  }
  
  this.add = function (v)
  {
    return new Vector2d(x + v.x, y + v.y);
  }
  
  this.inverse = function()
  {
    return new Vector2d(-x, -y);
  }
  
  this.normalize = function()
  {
    var force = this.force();
    return new Vector2d(x / force, y / force);
  }
  
  this.dotProduct = function(v)
  {
    return x * v.x + y * v.y;
  }
  
  this.crossProduct = function(v)
  {
    return x * v.y - v.x * y
  },
  
  this.toString = function()
  {
    return "(" + x + ", " + y + ")";
  }
}


