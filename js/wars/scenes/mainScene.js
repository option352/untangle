enchant();

var mainScene = Class.create(Scene, {
  initialize: function()
  {
    enchant.Scene.call(this);
    this.backgroundColor = "rgb(255, 180, 180)";
    
    this.stars = StarManager();
    this.staruis = [];
    
    var list = this.stars.getAllStars();
    for (var index in list)
    {
      var ui = new StarUI(list[index]);
      this.staruis.push(ui);
      this.addChild(ui);
    }
    
    var idx = ((Math.random() * list.length) | 0);
    console.log(idx);
    var start = this.stars.getStar(idx);
    start.changeInfluence(new BlueTeam());
    
    var pauseButton = new Button(50, 50);
    pauseButton.moveTo(DEFS.WIDTH - 50, 0);
    pauseButton.ontouchend = function()
    {
      enchant.Core.instance.pushScene(new popScene());
    }
    this.addChild(pauseButton);
    
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

