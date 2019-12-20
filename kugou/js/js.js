window.onload = function(){


    /**************菜单 ********************** */

    var n1more = document.getElementById("n1more");
    var navmenu = document.getElementById("navmenu");
    var nav0 = document.getElementById("nav0");
    var nav1  = document.getElementById("nav1");
    var mm = document.getElementById("mm");
    
    
     n1more.onmouseover = function(){
        //    t = settimeout(function(){
        //      navmenu.style.display = "block";
        //   },500)
          navmenu.style.display = "block";
          n1more.style.backgroundColor = "#0c8ed9";
          mm.style.color = "white";
          mm.style.backgroundImage = "url(img/arrowMoreu.png)";
          mm.style.backgroundRepeat = "no-repeat";
          mm.style.backgroundPosition = "72px 8px";
       
        clearTimeout(timer);
        
}
    var timer;
        n1more.onmouseout = function(){
              timer = setTimeout(function(){
                 navmenu.style.display = "none"; 
              },400);
             
            
              n1more.style.backgroundColor = "";
              mm.style.color = "#ddd";
              mm.style.backgroundImage = "url(img/arrowMored.png)";
              mm.style.backgroundRepeat = "no-repeat";
              mm.style.backgroundPosition = "72px 8px";
    }          
 
     navmenu.onmouseover = function(){
         clearTimeout(timer);
          navmenu.style.display = "block";
          n1more.style.backgroundColor = "#0c8ed9";
          mm.style.color = "white";
          mm.style.backgroundImage = "url(img/arrowMoreu.png)";
          mm.style.backgroundRepeat = "no-repeat";
          mm.style.backgroundPosition = "72px 8px";
       
    }
     navmenu.onmouseout = function(){
          navmenu.style.display = "none";
          n1more.style.backgroundColor = "";
          mm.style.color = "#ddd";
          mm.style.backgroundImage = "url(img/arrowMored.png)";
          mm.style.backgroundRepeat = "no-repeat";
          mm.style.backgroundPosition = "72px 8px";
        
        
    }





/********************** 轮播图************************/


function $(id){
    return document.getElementById(id);
  }


    var slider = $("slider");
    var next = $("next");
    var prev = $("prev");
    var wrap = $("wrap");
    var index = 0;


slider.onmouseover = function(){
  next.style.display = "block";
  prev.style.display = "block";
}
slider.onmouseout = function(){
  next.style.display = "none";
  prev.style.display = "none";
}

next.onclick = function(){
  clearInterval(timer);
  next_pic();
  autoplay();
}
prev.onclick = function(){
  clearInterval(timer);
  prev_pic();
  autoplay();
}

function next_pic(){
  
  index++;
  if(index > 9){
    index = 0;
  }
  showCurrentDot();
  var newLeft;
  if(wrap.style.left === "-20889px"){
    newLeft = -3798;
  }else{
    newLeft = parseInt(wrap.style.left)-1899;
  }
  wrap.style.left = newLeft + "px";
}


function prev_pic(){
  index--;
  if(index < 0){
    index = 9;
  }
  showCurrentDot();
  var newLeft;
  if(wrap.style.left === "0px"){
    newLeft = -17091;
  }else{
      newLeft = parseInt(wrap.style.left)+1899;
  }
  wrap.style.left = newLeft + "px";
}
var timer = null;

//创建自动播放函数
function autoplay(){
  timer = setInterval(function(){
    next_pic();
  },3000);
  
}
//函数调用
autoplay();


var dots = $("buttons").getElementsByTagName("span");
console.log(dots);
function showCurrentDot(){

  // for循环遍历所有小圆点
  for(var i=0, len=dots.length; i<len; i++ ){
    dots[i].className = "";
  }
  dots[index].className = "on";
  // console.log(len);
}

for (var i = 0, len = dots.length; i < len; i++){

   //在for循环下，用闭包函数给小圆点创建鼠标移入事件
  (function(i){
    
    dots[i].onmouseover = function () {
      var dis = index - i;
      if(index == 9 && parseInt(wrap.style.left)!==-18990){
        dis = dis - 10;   
      }
      //和使用prev和next相同，在最开始的照片5和最终的照片1在使用时会出现问题，导致符号和位数的出错，做相应地处理即可
      if(index == 0 && parseInt(wrap.style.left)!== -1899){
        dis = 10 + dis;
      }
      wrap.style.left = (parseInt(wrap.style.left) + dis * 1899)+"px";
      index = i;
      showCurrentDot();
      // console.log(index);
    }
  })(i);      
}


/*********************歌单选项卡*************************** */



   var tabt = $("tabt");
   var tabc = $("tabc");
   var sels = tabt.getElementsByTagName("span");
   var ul = tabc.getElementsByTagName("ul");
   console.log(sels);

   for(var i=0; i<sels.length;i++)
   {
       sels[i].index=i;//为每一个li添加对应的索引
       
       sels[i].onmouseover=function(){  //为每一个li添加onclick事件
        //    alert("111");
           for(var i=0;i<sels.length;i++)
           {
               
               sels[i].className='';  //循环清空所有的span标签的样式
               ul[i].style.display='none';  //循环隐藏所有的内容
           }
           this.className='active';  //当前点击的元素样式变成active
           ul[this.index].style.display='block';  //this.index 为获取当前的li对应的索引
             console.log(i);
        }
   }








   /***********************图片菜单***************************** */

  
   var ddt = $("dots");
   var aa = ddt.getElementsByTagName("a");
  //  console.log(aa);
   for(var i=0;i<aa.length;i++){
    //  var index = this.index;
     aa[i].index = i;  //给当前对象添加索引值
     aa[i].onmouseover = function(){
      for(var i=0;i<aa.length;i++){
        aa[i].className = "";
      }
      this.className = "on";   //this指当前对象，
      // aa[i].className = "on";
      console.log(this.index);  //输出当前对象的索引值
     }
   }



} 