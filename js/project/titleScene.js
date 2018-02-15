enchant();

var titleScene = Class.create(Scene, {
  initialize: function()
  {
    enchant.Scene.call(this);
    this.backgroundColor = "rgb(255, 180, 180)";
    
    this.nodeArray = [];
    this.lineArray = [];
    
    var allLines = [];
    this.lineLayer = new Sprite(960, 960);
    this.lineSurface = new Surface(960, 960);
    
    this.lineLayer.image = this.lineSurface;
    this.addChild(this.lineLayer);
    
    for (var i = 0; i < 6; i++)
    {
      var point = new Vertex();
      point.x = Math.floor(Math.random() * 700) + 100;
      point.y = Math.floor(Math.random() * 700) + 100;
      
      var len = this.nodeArray.length
      for (var j = 0; j < len; j++)
      {
        allLines.push(new LineSegment(this.nodeArray[j], point));
      }
      
      this.nodeArray.push(point);
      this.addChild(point);
      
    }
    
    this.lineArray = this.lineArray.concat(pickPair(allLines, 6));
    
    this.render();
    
  },
  
  onenterframe:function()
  {
    for (var i = 0; i < this.nodeArray.length; i++)
    {
      //this.nodeArray[i].x = this.nodeArray[i].x + (Math.random() * 11 - 5) | 0;
      //this.nodeArray[i].y = this.nodeArray[i].y + (Math.random() * 11 - 5) | 0;
    }
    this.render();
  },
  
  render:function()
  {
    var context = this.lineSurface.context;
    context.clearRect(0, 0, this.lineSurface.width, this.lineSurface.height);
    for (var i = 0; i < this.lineArray.length; i++)
    {
      this.lineArray[i].render(context);
    }
  }
});

//配列から重複なく要素を取り出す
function pickPair(array, num = 2)
{
  var a = array;
  var t = {} //取り出した要素に代入する要素
  var ret = [];
  var len = a.length;
  var n = num < len ? num : len;
  //console.log(n, num);
  while(n-- > 0)
  {
    var i = Math.random() * len | 0 //ビット演算をはさむことで整数に変換
    ret[n] = t[i] || a[i]; // 代入要素があれば使用、そうでなければ元の配列の要素を取り出す
    --len;
    t[i] = t[len] || a[len]; // 配列末尾の要素を取り出した要素の項番に設定
  }
  //console.log(array, ret);
  return ret;
  
}

