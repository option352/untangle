enchant();

var titleScene = Class.create(Scene, {
  initialize: function()
  {
    enchant.Scene.call(this);
    this.backgroundColor = "rgb(180, 255, 180)";
    
    var addButton = new Button(80, 80);
    addButton.x = 300;
    addButton.y = 100;
    addButton.setText(">>");
    this.addChild(addButton);
    
    var subButton = new Button(80, 80);
    subButton.x = 100;
    subButton.y = 100;
    subButton.setText("<<");
    this.addChild(subButton);
    
    var startButton = new Button(200, 80);
    startButton.x = 400;
    startButton.y = 600;
    startButton.setText("start!");
    startButton.ontouchend = function()
    {
      enchant.Core.instance.replaceScene(new mainScene());
    }
    this.addChild(startButton);
  },
  
  
  
});

