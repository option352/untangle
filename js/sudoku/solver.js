enchant();

var STATICS = STATICS || {};

var Solver = Class.create({
  initialize:function(sudoku)
  {
    this.sudoku = sudoku;
    this.commands = new Commands(sudoku);
  },
  
  solve:function()
  {
    var x;
    var y;
    var probs;
    for(var i = 0; i < STATICS.WIDTH * STATICS.HEIGHT; i++)
    {
      if(this.sudoku.cells[i].symbol != 0) continue;
      x = Math.floor(i % STATICS.WIDTH);
      y = Math.floor(i / STATICS.WIDTH);
      probs = this.sudoku.cells[i].getProbs();
      break;
    }
    
    var symbol = probs.pop();
    this.commands.addCommand(x, y, symbol);
    this.commands.executeOne();
    var check;
    do
    {
      check = this.sudoku.checkSolve();
      if(!check)
      {
        var com = this.commands.removeCommand();
        this.sudoku.checkOverlap();
        console.log(this.sudoku.cells[com.x + com.y * STATICS.WIDTH].getProbs())
        this.sudoku.cells[com.x + com.y * STATICS.WIDTH].probs.removeSymbol(com.symbol - 1);
        console.log(this.sudoku.cells[com.x + com.y * STATICS.WIDTH].getProbs())
      }
    }while(!check && this.commands.commands.length >= 0);
  }
  
});

