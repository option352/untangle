enchant();

window.onload = function() {
  var core = new Core(DEFS.WIDTH, DEFS.HEIGHT);
  core.fps = 1;
  core.onload = function()
  {
    var firstScene = new createScene();
    core.replaceScene(firstScene);
      
  };
  core.start();
};

