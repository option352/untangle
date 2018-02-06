enchant();

var STATICS = STATICS || {};

STATICS.WIDTH = 9;
STATICS.HEIGHT = 9;


var Sudoku = Class.create(Group, {
  initialize: function(game)
  {
    enchant.Group.call(this, STATICS.WIDTH * STATICS.CELL_WIDTH + 10, STATICS.HEIGHT * STATICS.CELL_HEIGHT + 10);
    
    this.cells = [];
    this.blocks = [];
    
    //É}ÉXÇÃèâä˙âª
    for (var i = 0; i < STATICS.WIDTH; i++)
    {
      for (var j = 0; j < STATICS.HEIGHT; j++)
      {
        var cell = new Cell(game);
        cell.x = j * STATICS.CELL_WIDTH + (Math.floor(j / 3) * 1);
        cell.y = i * STATICS.CELL_HEIGHT + (Math.floor(i / 3) * 1);
        this.cells.push(cell);
        this.addChild(cell);
      }
    }
    
    //îrëºÉuÉçÉbÉNåQìoò^
    for (var i = 0; i < STATICS.HEIGHT; i++)
    {
      var row = [];
      for (var j = 0; j < STATICS.WIDTH; j++)
      {
        row.push(this.cells[i * 9 + j]);
      }
      this.blocks.push(new Block(row));
    }
    for (var i = 0; i < STATICS.WIDTH; i++)
    {
      var col = [];
      for (var j = 0; j < STATICS.HEIGHT; j++)
      {
        col.push(this.cells[i + j * 9]);
      }
      this.blocks.push(new Block(col));
    }
    for (var i = 0; i < 3; i++)
    {
      for (var j = 0; j < 3; j++)
      {
        var base = i * 3 + j * 3 * 9;
        this.blocks.push(
          new Block([
            this.cells[base],
            this.cells[base + 1], 
            this.cells[base + 2], 
            this.cells[base + 9], 
            this.cells[base + 10], 
            this.cells[base + 11], 
            this.cells[base + 18], 
            this.cells[base + 19], 
            this.cells[base + 20]
          ])
        );
      }
    }
  },
    
  setSudoku:function(array2d)
  {
    var rowLength = array2d.length;
    for (var i = 0; i < rowLength; i++)
    {
      var colLength = array2d[i].length;
      for (var j = 0; j < colLength; j++)
      {
        this.cells[i * 9 + j].setSymbol(array2d[i][j])
      }
    }
    
    for (var i = 0; i < this.cells.length; i++)
    {
      this.cells[i].checkOverlap();
    }
  },
  
  //(X,Y)Ç…SymbolÇë}ì¸
  inputSymbol:function(x, y, symbol)
  {
    this.cells[x + y * 9].setSymbol(symbol);
  },
  
  checkOverlap:function()
  {
    for (var i = 0; i < this.cells.length; i++)
    {
      this.cells[i].checkOverlap();
    }
  },
  
  checkSolve:function()
  {
    var ret = true;
    for (var i = 0; i < this.cells.length; i++)
    {
      if(this.cells[i].symbol != 0) continue;
      if(this.cells[i].getProbs().length == 0)
      {
        ret = false;
        this.cells[i].setSymbol(0);
        break;
      }
    }
    return ret;
  }
});



