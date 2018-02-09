enchant();

window.onload = function() {
  var core = new Core(DEFS.WIDTH, DEFS.HEIGHT);
  core.fps = 24;
  core.onload = function()
  {
      var firstScene = new titleScene();
      core.replaceScene(firstScene);
      
  };
  core.start();
};

