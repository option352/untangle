enchant();

var mainScene = Class.create(Scene, {
  initialize: function()
  {
    enchant.Scene.call(this);
    this.backgroundColor = "rgb(255, 180, 180)";
    
    this.stars = StarManager();
    this.staruis = [];
    var ui = new StarUI(this.stars.getStar());
    this.staruis.push(ui);
    this.addChild(ui);
    
    this.render();
  },
  
  onenterframe:function()
  {
    this.stars.tick();
    for (var index in this.staruis)
    {
      this.staruis[index].render();
    }
  },
  
  render:function()
  {
    
  }
});

