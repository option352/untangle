enchant();

window.onload = function()
{
  var game = new Game(320, 320);
  game.fps = 24;
  game.preload('./img/cards/trump.gif');
  
  game.onload = function()
  {
    game.replaceScene(scenes.titleScene());
    cards.init();
    console.log(cards.deck);
  }
  
  game.start();
}