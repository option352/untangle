enchant();

var mainScene = Class.create(Scene, {
  initialize: function()
  {
    enchant.Scene.call(this);
    this.backgroundColor = "rgb(255, 180, 180)";
    
    this.stars = StarManager();
    
    this.addChild(new StarUI(this.stars.getStar()))
    
    this.render();
  },
  
  onenterframe:function()
  {
    //this.render();
    this.stars.tick();
  },
  
  render:function()
  {
    
  }
});

