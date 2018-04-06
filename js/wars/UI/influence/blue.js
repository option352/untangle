enchant();

var newtral = Class.create(influence, {
  initialize:function()
  {
    influence.call(this);
    this.color = "#8888ff";
    this.isProduct = true;
  }
});

