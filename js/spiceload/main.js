enchant();

var DEFS = DEFS || {};

window.onload = function()
{
  var core = new Core(DEFS.WIDTH, DEFS.HEIGHT);
  core.fps = DEFS.FPS;
  //core.preload('./img/cards/trump.gif');
  
  core.onload = function()
  {
    core.replaceScene(new MainScene());
  }
  
  core.start();
}