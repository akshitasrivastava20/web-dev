// //element selection
// let x=document.querySelector("h1");
// setTimeout(function(){
//     x.style.color='blue'
    
// }, 2*1000);
// //only the first h1 will be selected
// //to select all using the same tag h1 use query selector all
// x.style.fontFamily="Gill Sans";
// let y=document.querySelector("h2");
// setTimeout(function(){
//     y.innerHTML="five";
// },4*1000);

//event listeners means if kisi element ko click kro hover kroo ya bhaar niklu toh chng aaye kuch
 
let x=document.getElementById("ele1");
x.addEventListener("click",function(){
    x.style.color="yellow";
    x.style.backgroundColor="red";
})

x.addEventListener("mouseleave",function(){
    x.style.color="black";
    x.style.backgroundColor="white";
})

let y=document.getElementById("ele2");
y.addEventListener("mouseenter",function(){
    y.style.color="white";
    y.style.backgroundColor="orange";
})
y.addEventListener("mouseleave",function(){
    y.style.color="black";
    y.style.backgroundColor="white";
})

let z=document.getElementById("ele3");
y.addEventListener("click",function(){
    z.style.color="white";
    z.style.backgroundColor="purple";
})
z.addEventListener("click",function(){
    x.style.color="white";
    x.style.backgroundColor="green";
    x.innerHTML="bulbasaur";
})

