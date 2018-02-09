enchant();

var Observer = Class.create( {

  initialize: function()
  {
    this.observers = [];
  },
  
  addObserver: function(func)
  {
    this.observers.push(func);
  },
  
  removeBlock: function(func)
  {
    var index = this.observers.indexOf(func);
    if(index >= 0)
    {
      this.observers.splice(index, 1);
    }
  },
  
  dispatch: function(object)
  {
    var length = this.observers.length;
    for (var i = 0; i < length; i++)
    {
      this.observers[i](object);
    }
  }
  
});

