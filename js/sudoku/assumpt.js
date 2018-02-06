enchant();

var Commands = Class.create({
  initialize:function(sudoku)
  {
    this.sudoku = sudoku
    this.commands = [];
    this.pointer = 0;
  },
  
  addCommand:function(x, y, symbol)
  {
    this.commands.push(new ACommand(x, y, symbol));
  },
  
  removeCommand:function()
  {
    if(this.pointer == this.commands.length)
      this.rollbackOne();
    return this.commands.pop();
  },
  
  executeOne:function()
  {
    if(this.commands.length <= this.pointer || this.commands.length <= 0) return;
    this.commands[this.pointer].execute(this.sudoku);
    this.pointer++;
  },
  
  executeAll:function()
  {
    while(this.pointer < this.commands.length)
    {
      executeOne();
    }
  },
  
  rollbackOne:function()
  {
    if(this.pointer <= 0|| this.commands.length <= 0) return;
    this.pointer--;
    this.commands[this.pointer].rollback(this.sudoku);
  },
  
  executeAll:function()
  {
    while(this.pointer > 0)
    {
      rollbackOne();
    }
  },
});

var ACommand = Class.create(
{
  initialize:function(x, y, symbol)
  {
    this.x = x;
    this.y = y;
    this.symbol = symbol;
  },
  
  execute: function(sudoku)
  {
    sudoku.inputSymbol(this.x, this.y, this.symbol);
  },
  
  rollback: function(sudoku)
  {
    console.log("rollback", this);
    sudoku.inputSymbol(this.x, this.y, 0);
  }
});

