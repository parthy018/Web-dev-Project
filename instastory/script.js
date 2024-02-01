var arr=[
  {dp:"https://i.pinimg.com/236x/a3/9b/8a/a39b8a430bfc1438db85f4ae09b50581.jpg",story:
"https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"},

{dp:"https://thothd.com/contents/videos_sources/64000/64526/screenshots/2.jpg", story:"https://images.unsplash.com/photo-1526928008744-c86c7051aab6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"},
  {dp:"https://images.unsplash.com/photo-1520512202623-51c5c53957df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGJsb25kZXxlbnwwfHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1555992643-0c053cbd87e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw5MzkzNTA1fHxlbnwwfHx8fHw%3D"},
  {dp:"https://images.unsplash.com/photo-1517805686688-47dd930554b2?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw5MzkzNTA1fHxlbnwwfHx8fHw%3D"},
  {dp:"https://images.unsplash.com/photo-1621784562807-cb450c2f5efc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {dp:"https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1538504883652-476db9931a66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8OTM5MzUwNXx8ZW58MHx8fHx8"},
  {dp:"https://images.unsplash.com/photo-1621784562807-cb450c2f5efc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {  dp:"https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",story:"https://images.unsplash.com/photo-1557750505-e7b4d1c40410?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xvbnM2eXl2S3BoTXx8ZW58MHx8fHx8"},
  {dp:"https://images.unsplash.com/photo-1543612470-982105b863ad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {dp:"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1519160558534-579f5106e43f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8b25zNnl5dktwaE18fGVufDB8fHx8fA%3D%3D"},


];

var clutter="";
var st=document.querySelector("#storyian")
arr.forEach(function(elem,idx){
  clutter+= `  <div class="story">
  <img id="${idx}" src="${elem.dp}" alt="">
</div>`;
});
console.log(clutter);
st.innerHTML=clutter;

var storyImg=document.querySelector('#full-screen');
st.addEventListener("click",(dets)=>{
    // console.log(dets.target.id);
    document.querySelector('#full-screen').style.display="block";
    document.querySelector('#full-screen').style.backgroundImage=`url( ${arr[dets.target.id].story})`;
    setTimeout(function(){
        document.querySelector('#full-screen').style.display="none";
    },3000)
//    storyImg.addEventListener("dbclick",()=>{
//         storyImg.style.display="none";
//     })
});

