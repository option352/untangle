enchant();

window.onload = function()
{
  var game = new Game(320, 320);
  game.fps = 24;
  game.preload('./img/cards/trump.gif');
  
  game.onload = function()
  {
    var mainScene = function()
    {
      var scene = new Scene();
      scene.backgroundColor = "#ffcccc";
      
      var card = new Sprite(60, 90);
      card.image = game.assets['./img/cards/trump.gif'];
      card.x = 100;
      card.y = 120;
      
      scene.addChild(card);
      scene.addEventListener(Event.TOUCH_START, function()
      {
        card.frame += 1;
      });
      /*
      game.rootScene.addEventListener(Event.TOUCH_START, function(e)
      {
        speed = e.x > kuma.x ? 1 : -1;
        kuma.scaleX = speed;
      });
      */
      return scene;
    }
    
    var tempScene = function()
    {
    }
    

    game.replaceScene(mainScene());
  }
  
  game.start();
}