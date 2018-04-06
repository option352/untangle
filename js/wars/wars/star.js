enchant();

var DEFS = DEFS || {};

var Star = Class.create({
  initialize:function(data)
  {
    if(data == undefined) data = {};
    this.productCount = 0;
    this.unit = 0;
    this.productLevel = 1;
    this.influence = new newtral();
    this.observer = new Observer();
    this.x = data.x || 0;
    this.y = data.y || 0;
  },
  
  tick:function()
  {
    if(!this.influence.isProduct) return;
    this.productCount += this.productLevel;
    if(this.productCount > 60)
    {
      this.productCount = 0;
      this.unit++;
      this.observer.dispatch();
    }
  },
  
});

