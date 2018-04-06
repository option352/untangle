enchant();

var DEFS = DEFS || {};

var StarManager = function()
{
  var accessor = {};
  
  var stars = [];
  
  for (var i = 0; i < 5; i++)
  {
    for (var j = 0; j < 5; j++)
    {
      stars.push(new Star( {x: i * 100 + 20, y: j * 100 + 20} ));
    }
  }
  
  accessor.getStar = function(index=0)
  {
    return stars[index];
  }
  
  accessor.getAllStars = function()
  {
    return stars.concat();
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

