enchant();

var DEFS = DEFS || {};

DEFS.SOUND = {};
DEFS.SOUND.FILES = 
[
  "./sound/maou/game_maoudamashii_1_battle36.mp3",
  "./sound/maou/game_maoudamashii_1_battle37.ogg",
];

var Sounds = Class.create({
  initialize:function(core)
  {
    this.assets = core.assets;
    for (var path of DEFS.SOUND.FILES)
    {
      core.preload(path);
    }
    
    this.bgm = undefined;
    this.sound = undefined;
    this.bgmVolume = 1;
    this.soundVolume = 1;
  },
  
  playBgm:function(index)
  {
    var bgm = this.assets[DEFS.SOUND.FILES[index]];
    if(this.bgm)
    {
      this.bgm.stop();
    }
    this.bgm = bgm;
    
    //this.bgm.play();
  },
  
  
  
});