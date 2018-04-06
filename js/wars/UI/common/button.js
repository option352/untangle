enchant();

var Button = Class.create(Group, {
  initialize:function(width=100, height=20)
  {
    enchant.Group.call(this);
    
    var bgSurface = new Surface(width, height);
    this.bg = bgSurface;
    bgSurface.context.fillStyle = "#cc8888";
    bgSurface.context.fillRect(0, 0, width, height);
    
    var bgSprite = new Sprite(width, height);
    bgSprite.image = bgSurface;
    
    this.addChild(bgSprite);
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
  
  
});

