enchant();

window.onload = function()
{
  var game = new Game(320, 320);
  game.fps = 24;
  game.preload('./img/enchant4.png');
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
  
  game.start();
}