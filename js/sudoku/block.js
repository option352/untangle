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
    this.cells = cells;
  },
  
  /*
  ontouchstart:function()
  {
    this.checkCell();
  },
  */
  
  checkCell:function()
  {
    var length = this.cells.length;
    for (var i = 0; i < length; i++)
    {
      for (var j = 0; i < length; j++)
      {
        if (i == j || this.cells[i].symbol == 0) continue;
        console.log(this.cells[i], this.cells[j]);
        if (this.cells[i].symbol == this.cells[j].symbol)
        {
          this.cells[i].setOverlap(true);
          break;
        }
        this.cells[i].setOverlap(false);
      }
    }
  }
  
});

//ŽÀs’†‚ÌŠÖ”i–³–¼ŠÖ”j‚ðíœ
//this.removeEventListener("touchstart", arguments.callee);

