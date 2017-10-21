var NodeManager = function()
{
  this.nodes = [];
};

NodeManager.prototype.create = function()
{
};

NodeManager.prototype.update = function()
{
};



var NodePoint = function()
{
  this.x = Math.floor(Math.random() * DEFS.WIDTH);
  this.y = Math.floor(Math.random() * DEFS.HEIGHT);
  this.r = 5;
}

NodePoint.prototype.draw = function(context)
{
  context.beginPath();
  context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
  context.fillStyle = "#cc4444";
  context.fill();
}

NodePoint.prototype.move = function()
{
  
  //this.x = (this.x + Math.floor(Math.random() * 5) - 2) % DEFS.WIDTH;
  //this.y = (this.y + Math.floor(Math.random() * 5) - 2) % DEFS.HEIGHT;
}

