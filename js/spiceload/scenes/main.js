enchant();

var MainScene = Class.create(Scene, {
  initialize: function()
  {
    enchant.Scene.call(this);
    this.backgroundColor = "#ffcccc";
    var label = new Label("main scene");
    this.addChild(label);
    
    enchant.Core.instance.soundManager.playBgm(1);
    
    var player1 = new Player();
    player1.group.x = 200;
    player1.group.y = 600;
    this.addChild(player1.group);
  }
});

