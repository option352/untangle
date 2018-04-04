var NodeLink = function(_p, _q)
{
  this.p = _p;
  this.q = _q;
}

NodeLink.prototype.draw = function(context)
{
  context.beginPath();
  context.moveTo(this.p.x, this.p.y);
  context.lineTo(this.q.x, this.q.y);
  context.stroke();
}

