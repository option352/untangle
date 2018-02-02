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
  
  //����ӏ���1�����Ȃ��V���{�����m��
  collectOnlySymbol:function()
  {
    for (var i = 1; i <= 9; i++)
    {
      var cells = this.checkOnlySymbol(i);
      if (cells.length == 1)
      {
        cells[0].setSymbol(i);
      }
    }
  },
  
  //����̐���������Z�����X�g
  checkOnlySymbol:function(symbol)
  {
    var ret = [];
    var length = this.cells.length;
    for (var i = 0; i < length; i++)
    {
      var probs = this.cells[i].getProbs();
      for (var j = 0; j < probs.length; j++)
      {
        if(probs[j] == symbol)
        {
          ret.push(this.cells[i]);
        }
      }
    }
    
    // �d�����폜�������X�g
    return ret.filter(function(x, i, self){ return self.indexOf(x) === i })
  },
  
  //�u���b�N���Ŋm�肵�Ă��鐔�����X�g
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
  },
  
  //�u���b�N���̃Z���̐F��ύX
  //CPU�������ۂɕ\��
  changeBG:function(color)
  {
    var length = this.cells.length;
    for (var i = 0; i < length; i++)
    {
      this.cells[i].changeBG(color);
    }
  },
  
  updateProbs:function()
  {
    var length = this.cells.length;
    for (var i = 0; i < length; i++)
    {
      this.cells[i].checkOverlap();
    }
  }
  
});

//���s���̊֐��i�����֐��j���폜
//this.removeEventListener("touchstart", arguments.callee);

