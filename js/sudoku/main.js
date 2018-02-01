enchant();

window.onload = function()
{
  var game = new Game(350, 350);
  game.fps = 24;
  game.preload(STATICS.CELL_IMAGE);
  
  var WIDTH = 9;
  var HEIGHT = 9;
  
  var cells = [];
  
  //var block;
  
  game.onload = function()
  {
    for (var i = 0; i < WIDTH; i++)
    {
      for (var j = 0; j < HEIGHT; j++)
      {
        var cell = new Cell(game);
        var scale = 0.5;
        cell.x = i * STATICS.CELL_WIDTH * scale + (Math.floor(i / 3) * 1);
        cell.y = j * STATICS.CELL_HEIGHT * scale + (Math.floor(j / 3) * 1);
        cell.scaleX = scale;
        cell.scaleY = scale;
        cells.push(cell);
        game.rootScene.addChild(cell);
      }
    }
    
    //block = new Block([cells[0], cells[1], cells[2], cells[9], cells[10], cells[11], cells[18], cells[19], cells[20]]);
    
    /*
    game.rootScene.addEventListener("touchstart", function()
    {
      block.checkCell();
    });
    */
  }
  
  game.start();
}