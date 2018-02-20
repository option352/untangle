enchant();

window.onload = function()
{
  var game = new Game(960, 960);
  game.fps = 24;
  game.preload('./img/cards/trump.gif');
  
  game.onload = function()
  {
    game.replaceScene(scenes.mainScene());
  }
  
  game.start();
}