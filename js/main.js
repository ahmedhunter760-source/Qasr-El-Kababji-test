//scrool 
let scr= document.getElementById('scroll');

   window.onscroll = function(){
    if(scrollY >= 300)
    {
        scr.style.display = 'block'
    }
    else{
        scr.style.display ='none'
    }
   }
   scr.onclick = function(){
    // scroll(0,0)
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
   }


