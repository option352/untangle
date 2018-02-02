enchant();

var STATICS = STATICS || {};

STATICS.CELL_IMAGE  = "./img/sudoku/flame.png";
STATICS.CELL_WIDTH  = 64;
STATICS.CELL_HEIGHT = 64;
//STATICS.CELL_DEFAULT_COLOR = "#88888888";
//STATICS.CELL_OVERLAP_COLOR = "#CC444488";
STATICS.CELL_DEFAULT_COLOR = "black";
STATICS.CELL_OVERLAP_COLOR = "red";

var Cell = Class.create(Group, {

  initialize: function(game, symbol = 0)
  {
    enchant.Group.call(this, STATICS.CELL_WIDTH, STATICS.CELL_HEIGHT);
    
    var sprite = new Sprite(STATICS.CELL_WIDTH, STATICS.CELL_HEIGHT);
    sprite.image = game.assets[STATICS.CELL_IMAGE];
    
    this.bg = sprite;
    //this.setOverlap(false);
    this.addChild(sprite);
    
    this.symbol = symbol;
    
    this.symbolLabel = new Label();
    this.symbolLabel.x = 20 + 6;
    this.symbolLabel.y = 20 + 0;
    this.symbolLabel.font = "24px 'メイリオ'";
    
    this.updateLabel();
    this.addChild( this.symbolLabel );
    
    if(symbol == 0)
    {
      this.probs = new ProbLabels();
      this.addChild(this.probs);
    }
    
    this.parentBlocks = [];
  },
  
  ontouchstart: function()
  {
    this.symbol = (this.symbol + 1) % 10;
    this.updateLabel();
  },
  
  updateLabel: function()
  {
    this.symbolLabel.text = this.symbol;
    this.symbolLabel.visible = this.symbol != 0;
    if(this.symbol == 0)
      this.setOverlap(false);
    else
    {
      if(this.parentBlocks)
      {//初期化時にブロック登録がなされていない例外処理
        var length = this.parentBlocks.length;
        for (var i = 0; i < length; i++)
        {
          this.parentBlocks[i].checkCell();
        }
      }
    }
  },
  
  addBlock: function(block)
  {
    var length = this.parentBlocks.length;
    for (var i = 0; i < length; i++)
    {
      if (this.parentBlocks[i] == block) return false;
    }
    this.parentBlocks.push(block);
    return true;
  },
  
  removeBlock: function(block)
  {
    var length = this.parentBlocks.length;
    for (var i = 0; i < length; i++)
    {
      if (this.parentBlocks[i] == block)
      {
        this.parentBlocks.splice(i, 1);
        return true;
      }
    }
    return false;
  },
  
  isOverlap:function()
  {
    //return this.bg.backgroundColor == STATICS.CELL_OVERLAP_COLOR;
    return this.symbolLabel.color == STATICS.CELL_OVERLAP_COLOR;
  },
  
  setOverlap:function(bool)
  {
    //重複時の色変更処理
    //this.bg.backgroundColor = bool ? STATICS.CELL_OVERLAP_COLOR : STATICS.CELL_DEFAULT_COLOR;
    //this.bg.backgroundColor = bool ? "rgba(255, 180, 180, 128)" : "rgba(255, 255, 255, 0)";
    this.symbolLabel.color = bool ? STATICS.CELL_OVERLAP_COLOR : STATICS.CELL_DEFAULT_COLOR;
  },
  
  //このセルが所属するブロックにある数字を除外
  checkOverlap: function()
  {
    if (this.probs == undefined) return;
    var length = this.parentBlocks.length;
    for (var i = 0; i < length; i++)
    {
      var usedSymbols = this.parentBlocks[i].getUsedSymbols();
      for (var j = 0; j < usedSymbols.length; j++)
      {
        this.probs.removeSymbol(usedSymbols[j]);
      }
    }
  }
  
  
});

var ProbLabels = Class.create(Group, {
  initialize: function(game)
  {
    enchant.Group.call(this, STATICS.CELL_WIDTH, STATICS.CELL_HEIGHT);
    this.symbols = [];
    for (var i = 0; i < 9; i++)
    {
      var probSymbol = new Label( i + 1 );
      probSymbol.x = Math.floor(i % 3) * 20 + 6;
      probSymbol.y = Math.floor(i / 3) * 20 + 2;
      probSymbol.font = "16px 'メイリオ'";
      
      this.symbols.push(probSymbol);
      this.addChild(probSymbol);
    }
  },
  
  //可能性リストから数字を除外
  removeSymbol: function(symbol)
  {
    if (this.symbols[symbol] != undefined)
    {
      this.removeChild(this.symbols[symbol]);
      this.symbols[symbol] = undefined;
    }
  },
  
  //可能性リストの残数を取得
  getProbNums: function()
  {
    var ret = 0;
    for (var i = 0; i < 9; i++)
    {
      if(this.symbols[i] != undefined) ret++;
    }
    return ret;
  }
  
  
});

//実行中の関数（無名関数）を削除
//this.removeEventListener("touchstart", arguments.callee);

