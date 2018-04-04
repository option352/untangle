enchant();

var DEFS = DEFS || {};

var StarManager = function()
{
  var accessor = {};
  
  var stars = [];
  
  for (var i = 0; i < 1; i++)
  {
    stars.push(new Star());
  }
  
  accessor.getStar = function(){ return stars[0]; }
  
  accessor.render = function(context)
  {
    star.render(context);
  }
  
  accessor.tick = function()
  {
    for (var index in stars)
    {
      stars[index].tick();
    }
  }
  
  return accessor;
};

