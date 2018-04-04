enchant();

var DEFS = DEFS || {};

var Star = Class.create({
  initialize:function()
  {
    this.productCount = 0;
    this.unit = 0;
    this.productLevel = 1;
    this.influence = new newtral();
    this.observer = new Observer();
  },
  
  tick:function()
  {
    this.productCount += this.productLevel;
    if(this.productCount > 60)
    {
      this.productCount = 0;
      this.unit++;
      this.observer.dispatch();
    }
  },
  
});

