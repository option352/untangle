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
      
      for (var _node of arr)
      {
        console.log(_node);
        _node.draw(surface.context);
      }
      
      core.rootScene.addChild(canvas);
      
  };
  core.start();
};


