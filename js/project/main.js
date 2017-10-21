enchant();

var nodes = [];
var links = [];
var context;
var core;

window.onload = function() {
  console.log("hello!");
  init();
  core.onload = function() {
      var canvas = new Sprite(DEFS.WIDTH, DEFS.HEIGHT);
      
      canvas.backgroundColor = "rgba(200, 255, 200, 0.5)";
      
      var surface = new Surface(DEFS.WIDTH, DEFS.HEIGHT);
      
      canvas.image = surface;
      
      context = surface.context;
      
      for (var i = 0; i < 10; i++)
      {
        var node = new NodePoint();
        //node.draw(surface.context);
        nodes.push(node);
      }
      
      for (var i = 0; i < 10; i++)
      {
        var p = nodes[i];
        var q = nodes[(i + 1) % 10];
        var linkNode = new NodeLink(p, q);
        linkNode.draw(surface.context);
        links.push(linkNode);
      }
      
      canvas.addEventListener('enterframe', mainLoop);
      
      /*
      canvas.addEventListener('enterframe', function()
      {
        surface.context.clearRect(0, 0, DEFS.WIDTH, DEFS.HEIGHT);
        for (var _node of arr)
        {
          _node.move();
          _node.draw(surface.context);
        }
        for (var _line of links)
        {
          _line.draw(surface.context);
        }
      });
      */
      
      core.rootScene.addChild(canvas);
      
  };
  core.start();
};

function init()
{
  core = new Core(DEFS.WIDTH, DEFS.HEIGHT);
  //core.preload('enchant.png');
}

function mainLoop()
{
  context.clearRect(0, 0, DEFS.WIDTH, DEFS.HEIGHT);
  for (var node of nodes)
  {
    node.move();
    node.draw(context);
  }
  for (var line of links)
  {
    line.draw(context);
  }
}

