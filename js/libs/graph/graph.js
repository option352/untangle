enchant();

var Graphics = Graphics || {};

Graphics.fillRoundRect = function(context, x, y, w, h, r, color="#000000")
{
  if(!context) return;
  
  var pi = Math.PI
  
  context.begenPath();
  context.fillStyle = color;
  
  context.arc(x + r,     y + r,     r, -pi,     -pi / 2, false);
  context.arc(x + w - r, y + r,     r, -pi / 2, 0,       false);
  context.arc(x + w - r, y * h - r, r, 0,       pi / 2,  false);
  context.arc(x + r,     y * h - r, r, pi / 2,  pi,      false);
  
  context.closePath();
  context.fill();
}

