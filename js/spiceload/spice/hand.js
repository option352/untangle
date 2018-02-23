enchant();

var DEFS = DEFS || {};

DEFS.PLAYER = {};
DEFS.PLAYER.SIZE = 200;

var Player = Class.create({
  initialize:function()
  {
    var size = DEFS.PLAYER.SIZE;
    var r = 16;
    
    this.spices = [];
    
    this.group = new Group(size, size);
    
    this.bg = new Sprite(size, size);
    
    this.bg_img = new Surface(size, size);
    
    var context = this.bg_img.context;
    
    context.fillStyle = "#888888";
    context.beginPath();
    
    for (var i = 0; i < 4; i++)
    {
      var x = (i >> 1) == (i & 1) ? r : size - r;
      var y = (i & 2) == 0 ? r : size - r;
      var rad = Math.PI / 2;
      var startRad = rad * (i - 2);
      
      context.arc(x, y, r, startRad, startRad + rad, false);
    }
    
    context.closePath();
    context.fill();
    
    this.bg.image = this.bg_img;
    
    this.group.addChild(this.bg);
    
    for (var i = 0; i < 10; i++)
    {
      var spice = new Spice();
      this.group.addChild(spice);
      spice.x = 40 * (i % 5) + 4;
      spice.y = 40 * ((i / 5) | 0) + 4;
      this.spices.push(spice);
    }
  },
  
  getSpice:function()
  {
    var ret = [];
    for (var spice of this.spices)
    {
      if(spice.id == 0 || spice.id == 99) continue;
      ret.push(spice.id);
    }
    ret.sort(function (a, b){
      if( a < b ) return -1;
      if( a > b ) return 1;
      return 0;
    });
    return ret;
  },
  
  getSpiceCount:function()
  {
    var ret = {};
    for (var spice of this.spices)
    {
      if(spice.id == 0 || spice.id == 99) continue;
      ret[spice.id] = ret[spice.id] + 1 || 1;
    }
    
  },
  
  addSpice:function(newSpices)
  {
    this.setSpice(this.getSpice().concat(newSpices));
  },
  
  useSpice:function(useSpices)
  {
    var spices = this.getSpiceCount();
    
  },
  
  setSpice:function(spices)
  {
    for (var i = 0; i < this.spices.length; i++)
    {
      var spice = this.spices[i];
      spice.id = i <= spices.length ? spices[spices.length - i - 1] : 0;
      spice.renderIcon();
    }
  }
  
  
});

var Spice = Class.create(Group, {
  size : 32,
  
  initialize:function(id = 0)
  {
    var size = this.size;
    enchant.Group.call(this, size, size);
    this.id = id;
    
    this.colors = 
    {
      99:"#00000000",
      0:"#444444ff",
      1:"#cccc00ff",
      2:"#cc0000ff",
      3:"#00cc00ff",
      4:"#440000ff"
    };

    
    this.isFlare = false;
    var flare = new Sprite(size, size);
    this.flare_img = new Surface(size, size);
    this.renderFlare();
    flare.image = this.flare_img;
    this.addChild(flare);
    
    var icon = new Sprite(size, size);
    this.icon_img = new Surface(size, size);
    this.renderIcon();
    icon.image = this.icon_img;
    this.addChild(icon);
    
  },
  
  renderFlare:function()
  {
    var context = this.flare_img.context;
    context.fillStyle = this.isFlare ? "#0000ccff" : "#00000000";
    context.beginPath();
    context.arc(this.size / 2, this.size / 2, this.size / 2, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
  },
  
  renderIcon:function()
  {
    var gap = 2;
    var size = this.size - gap * 2;
    var context = this.icon_img.context;
    console.log(this);
    context.fillStyle = this.colors[this.id];
    context.beginPath();
    context.arc(this.size / 2, this.size / 2, size / 2, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
  }
  
  
});


