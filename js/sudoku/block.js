enchant();

var STATICS = STATICS || {};

STATICS.BLOCK_IMAGE  = "./img/sudoku/flame.png";
STATICS.BLOCK_ROW = 3;
STATICS.BLOCK_COL = 3;
STATICS.CELL_SCALE = 0.5;
STATICS.BLOCK_WIDTH  = STATICS.BLOCK_ROW * STATICS.CELL_WIDTH * STATICS.CELL_SCALE;
STATICS.BLOCK_HEIGHT = STATICS.BLOCK_COL * STATICS.CELL_HEIGHT * STATICS.CELL_SCALE;
STATICS.MAX_SYMBOL = STATICS.BLOCK_ROW * STATICS.BLOCK_COL;

var Block = Class.create(Group, {

  initialize: function(cells)
  {
    this.cells = cells || [];
    var cellLength = this.cells.length;
    for(var i = 0; i < cellLength; i++)
    {
      this.cells[i].addBlock(this);
    }
  },
  
  checkCell:function()
  {
    var length = this.cells.length;
    for (var i = 0; i < length; i++)
    {
      for (var j = 0; j < length; j++)
      {
        if (i == j || this.cells[i].symbol == 0) continue;
        if (this.cells[i].symbol == this.cells[j].symbol)
        {
          this.cells[i].setOverlap(true);
          break;
        }
        this.cells[i].setOverlap(false);
      }
    }
  },
  
  //ブロック内で確定している数字リスト
  getUsedSymbols:function()
  {
    var ret = [];
    var length = this.cells.length;
    for (var i = 0; i < length; i++)
    {
      if (this.cells[i].symbol != 0)
      {
        ret.push(this.cells[i].symbol - 1);
      }
    }
    return ret;
  }
  
});

//実行中の関数（無名関数）を削除
//this.removeEventListener("touchstart", arguments.callee);

