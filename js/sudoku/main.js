enchant();

window.onload = function()
{
  var game = new Game(700, 700);
  game.fps = 1;
  game.preload(STATICS.CELL_IMAGE);
  
  var WIDTH = 9;
  var HEIGHT = 9;
  
  var cells = [];
  var blocks = [];
  
  game.onload = function()
  {
    var sudoku = new Sudoku(game);
    
    sudoku.setSudoku(STATICS.DEFAULT_SYMBOL);
    game.rootScene.addChild(sudoku);
    
    /*
    for (var i = 0; i < cells.length; i++)
    {
      cells[i].checkOverlap();
    }
    
    var targetBlock = -1;
    
    game.onenterframe = function()
    {
      if(targetBlock >= 0)
        blocks[targetBlock].changeBG("rgba(255, 255, 255, 0)");
      targetBlock = (targetBlock + 1) % blocks.length;
      blocks[targetBlock].changeBG("rgba(255, 180, 255, 128)");
      blocks[targetBlock].collectOnlySymbol();
    }
    */
    
    var solver = new Solver(sudoku);
    
    game.onenterframe = function()
    {
      solver.solve();
    }
  }
  
  game.start();
}