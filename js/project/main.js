enchant();

window.onload = function() {
  console.log("hello!");
  var core = new Core(320, 320);
  core.preload('enchant.png');
  core.onload = function() {
      var canvas = new Sprite(320, 320);
      
      canvas.backgroundColor = "rgba(200, 255, 200, 0.5)";
      
      var surface = new Surface(320, 320);
      
      canvas.image = surface;
      
      context = surface.context;
      
      var arr = [];
      for (var i = 0; i < 10; i++)
      {
        var node = new NodePoint();
        //node.draw(surface.context);
        arr.push(node);
      }
      
      var links = [];
      for (var i = 0; i < 10; i++)
      {
        var p = arr[i];
        var q = arr[(i + 1) % 10];
        var linkNode = new NodeLink(p, q);
        linkNode.draw(surface.context);
        links.push(linkNode);
      }
      
      canvas.addEventListener('enterframe', mainLoop);
      
      /*
      canvas.addEventListener('enterframe', function()
      {
        surface.context.clearRect(0, 0, 320, 320);
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

function mainLoop()
{
  console.log("main loop");
}
