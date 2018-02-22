enchant();

var MainScene = Class.create(Scene, {
  initialize: function()
  {
    enchant.Scene.call(this);
    this.backgroundColor = "#ffcccc";
    var label = new Label("main scene");
    this.addChild(label);
  }
});

