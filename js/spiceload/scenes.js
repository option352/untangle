enchant();

var scenes = 
{
  mainScene: function()
  {
    var scene = new Scene();
    var label = new Label("\u002f\u003f\u004b\u005b");
    label.font = "120px NKS24 Playing Cards";
    scene.addChild(label);
    scene.backgroundColor = "rgba(192, 192, 192, 1)";
    
    scene.deck = new Deck();
    
    scene.hand = new Hand();
    scene.hand.group.x = (960 - 400) / 2;
    scene.hand.group.y = 800;
    scene.addChild(scene.hand.group);
    
    scene.counter = 0;
    scene.onenterframe = function()
      {
        scene.counter++;
        if(scene.counter >= 6)
        {
          scene.counter = 0;
          scene.hand.addHand(scene.deck.draw());
        }
        if(scene.hand.cards.length >= 5)
        {
          scene.onenterframe = undefined;
          var poker = new Poker();
          console.log(poker.checkHand(scene.hand.cards));
        }
      }
    
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

