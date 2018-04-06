enchant();

window.onload = function() {
  var core = new Core(DEFS.WIDTH, DEFS.HEIGHT);
  core.fps = 24;
  core.onload = function()
  {
      core.replaceScene(new titleScene());
      
  };
  core.start();
};

