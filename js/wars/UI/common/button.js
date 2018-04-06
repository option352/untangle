enchant();

var Button = Class.create(Group, {
  initialize:function(width=100, height=30)
  {
    enchant.Group.call(this);
    
    var bgSurface = new Surface(width, height);
    this.bg = bgSurface;
    bgSurface.context.fillStyle = "#cc8888";
    bgSurface.context.fillRect(0, 0, width, height);
    
    var bgSprite = new Sprite(width, height);
    bgSprite.image = bgSurface;
    
    this.addChild(bgSprite);
    
    var label = new Label();
    this._label = label;
    label.textAlign = "center";
    label.text = "button";
    label.font = "16pt メイリオ ";
    label.width = width;
    label.y = Math.max(height / 2 - 16, 0);
    this.addChild(label);
    
  },
  
  ontouchstart:function()
  {
    this.bg.context.fillStyle = "#ff8888";
    this.bg.context.fillRect(0, 0, this.bg.width, this.bg.height);
  },
  
  ontouchend:function()
  {
    this.bg.context.fillStyle = "#cc8888";
    this.bg.context.fillRect(0, 0, this.bg.width, this.bg.height);
  },
  
  setText:function(text)
  {
    this._label.text = text;
  },
  
});

