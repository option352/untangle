enchant();

window.onload = function()
{
  var game = new Game(350, 350);
  game.fps = 1;
  game.preload(STATICS.CELL_IMAGE);
  
  var WIDTH = 9;
  var HEIGHT = 9;
  
  var cells = [];
  
  game.onload = function()
  {
    //É}ÉXÇÃèâä˙âª
    for (var i = 0; i < WIDTH; i++)
    {
      for (var j = 0; j < HEIGHT; j++)
      {
        var cell = new Cell(game, STATICS.DEFAULT_SYMBOL[i][j]);
        var scale = 0.5;
        cell.x = j * STATICS.CELL_WIDTH * scale + (Math.floor(j / 3) * 1);
        cell.y = i * STATICS.CELL_HEIGHT * scale + (Math.floor(i / 3) * 1);
        cell.scaleX = scale;
        cell.scaleY = scale;
        cells.push(cell);
        game.rootScene.addChild(cell);
      }
    }
    
    //îrëºÉuÉçÉbÉNåQìoò^
    for (var i = 0; i < HEIGHT; i++)
    {
      var row = [];
      for (var j = 0; j < WIDTH; j++)
      {
        row.push(cells[i * 9 + j]);
      }
      new Block(row);
    }
    for (var i = 0; i < WIDTH; i++)
    {
      var col = [];
      for (var j = 0; j < HEIGHT; j++)
      {
        col.push(cells[i + j * 9]);
      }
      new Block(col);
    }
    for (var i = 0; i < 3; i++)
    {
      for (var j = 0; j < 3; j++)
      {
        var base = i * 3 + j * 3 * 9;
        new Block([
          cells[base],
          cells[base + 1], 
          cells[base + 2], 
          cells[base + 9], 
          cells[base + 10], 
          cells[base + 11], 
          cells[base + 18], 
          cells[base + 19], 
          cells[base + 20]
          ]);
      }
      
      /*
      for (var i = 0; i < cells.length; i++)
      {
        cells[i].checkOverlap();
      }
      */
    }
    
    var targetCell = -1;
    
    game.onenterframe = function()
    {
      if(targetCell >= 0)
        cells[targetCell].bg.backgroundColor = "rgba(255, 255, 255, 128)";
      targetCell = (targetCell + 1) % cells.length;
      cells[targetCell].bg.backgroundColor = "rgba(255, 180, 255, 128)";
      cells[targetCell].checkOverlap();
    }
  }
  
  game.start();
}