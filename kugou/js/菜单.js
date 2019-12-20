window.onload = function(){
    // alert("111");
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
  


}