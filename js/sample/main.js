enchant();

window.onload = function()
{
  var game = new Game(320, 320);
  game.fps = 24;
  game.preload('./img/enchant4.png');
  /*
  game.onload = function()
  {
    var kuma = new Sprite(32, 32);
    kuma.image = game.assets['./img/enchant4.png'];
    kuma.x = 100;
    kuma.y = 120;
    
    var speed = 1;
    
    game.rootScene.addChild(kuma);
    game.rootScene.backgroundColor = "#7ecef4";
    game.rootScene.addEventListener(Event.ENTER_FRAME, function()
    {
      kuma.frame = kuma.frame < 2 ? kuma.frame + 1 : 0;
      kuma.x += speed;
    });
    game.rootScene.addEventListener(Event.TOUCH_START, function(e)
    {
      speed = e.x > kuma.x ? 1 : -1;
      kuma.scaleX = speed;
    });
  }
  */
  
  game.onload = function()
  {
    var createTitleScene = function()
    {
      var scene = new Scene();
      var label = new Label("title scene");
      scene.addChild(label);
      scene.backgroundColor = "rgba(255, 230, 0, 1)";
      scene.addEventListener(Event.TOUCH_START, function(e)
      {
        game.replaceScene(createGameScene());
      });
      
      return scene;
    }
    
    var createGameScene = function()
    {
      var scene = new Scene();
      var label = new Label("game scene");
      scene.addChild(label);
      scene.backgroundColor = "rgba(255, 200, 0, 1)";
      scene.addEventListener(Event.TOUCH_START, function(e)
      {
        game.pushScene(createGameoverScene());
      });
      return scene;
    }
    
    var createGameoverScene = function()
    {
      var scene = new Scene();
      var label = new Label("game over scene");
      label.x = 0;
      label.y = 20;
      scene.addChild(label);
      scene.backgroundColor = "rgba(0, 0, 255, 0.5)";
      scene.addEventListener(Event.TOUCH_START, function(e)
      {
        //game.popScene();
        game.replaceScene(createTitleScene());
      });
      return scene;
    }

    game.replaceScene(createTitleScene());
  }
  
  game.start();
}