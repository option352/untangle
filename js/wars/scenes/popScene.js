enchant();

var popScene = Class.create(Scene, {
  initialize: function()
  {
    enchant.Scene.call(this);
    this.backgroundColor = "rgba(0, 0, 0, 0.5)";
    
    var button = new Button(400, 150);
    button.moveTo(DEFS.WIDTH / 2 - 200, DEFS.HEIGHT / 2 - 75);
    button.setText("GO TO TITLE");
    button.ontouchend = function()
    {
      enchant.Core.instance.replaceScene(new titleScene());
    }
    this.addChild(button);
  },
  
  ontouchend:function(e)
  {
    //enchant.Core.instance.popScene();
  },
  
});


