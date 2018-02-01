enchant();

window.onload = function()
{
  var game = new Game(320, 320);
  game.fps = 24;
  game.preload(STATICS.CELL_IMAGE);
  
  var WIDTH = 9;
  var HEIGHT = 9;
  
  game.onload = function()
  {
    for (var i = 0; i < WIDTH; i++)
    {
      for (var j = 0; j < HEIGHT; j++)
      {
        var cell = new Cell(game);
        var scale = 0.5;
        cell.x = i * STATICS.CELL_WIDTH * scale;
        cell.y = j * STATICS.CELL_HEIGHT * scale;
        cell.scaleX = scale;
        cell.scaleY = scale;
        game.rootScene.addChild(cell);
      }
    }
  }
  
  game.start();
}