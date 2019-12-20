window.onload = function(){


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
function autoplay(){
  timer = setInterval(function(){
    next_pic();
  },3000);
  
}
autoplay();


var dots = $("buttons").getElementsByTagName("span");
console.log(dots);
function showCurrentDot(){
  for(var i=0, len=dots.length; i<len; i++ ){
    dots[i].className = "";
  }
  dots[index].className = "on";
  // console.log(len);
}

for (var i = 0, len = dots.length; i < len; i++){

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






















}












    














