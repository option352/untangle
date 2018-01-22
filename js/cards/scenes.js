enchant();

var scenes = 
{
  mainScene: function()
  {
    var scene = new Scene();
    var label = new Label("main scene");
    scene.addChild(label);
    scene.backgroundColor = "rgba(255, 230, 0, 1)";
    
    return scene;
  },
  
  titleScene: function()
  {
    var scene = new Scene();
    var label = new Label("title scene");
    scene.addChild(label);
    scene.backgroundColor = "rgba(255, 0, 0, 1)";
    
    return scene;
  }
  
}


/*
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
  //game.rootScene.addEventListener(Event.TOUCH_START, function(e)
  //{
  //  speed = e.x > kuma.x ? 1 : -1;
  //  kuma.scaleX = speed;
  //});
  return scene;
}

game.replaceScene(mainScene());
*/

