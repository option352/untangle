enchant();

var popScene = Class.create(Scene, {
  initialize: function()
  {
    enchant.Scene.call(this);
    this.backgroundColor = "rgba(0, 0, 0, 0.5)";
    
  },
  
  ontouchend:function(e)
  {
    //enchant.Core.instance.pushScene(new popScene());
    enchant.Core.instance.popScene();
  },
  
});


