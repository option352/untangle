var Vector2d = function(x, y)
{
  this.x = x;
  this.y = y;
  
  this.force = function()
  {
    return Math.sqrt(x * x + y * y);
  }
  
  this.dotProduct = function(v)
  {
    return x * v.x + y * v.y;
  }
  
  this.crossProduct = function(v)
  {
    return x * v.y - v.x * y
  }
}


