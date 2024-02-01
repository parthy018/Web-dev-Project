var elemVar=document.querySelectorAll('.elem');
// var elem1=document.querySelector('#elem1');
// var elemimg=document.querySelector('#elem1 img');

// elem1.addEventListener('mousemove',function(dets){
//     elemimg.style.left=dets.x+"px";
//     elemimg.style.top=dets.y+"px";
// })
// elem1.addEventListener('mouseenter',function(dets){
//     elemimg.style.opacity=1;
// })

// elem1.addEventListener('mouseleave',function(dets){
//     elemimg.style.opacity=0;
// })


elemVar.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity=1;
    })
    val.addEventListener("mousemove",function(my){
        val.childNodes[3].style.left=my.x+"px";
        val.childNodes[3].style.top=my.y+"px";
    })

    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=0;
    })
})
