let x= document.getElementById("one");

x.addEventListener("mouseenter",function(){
  let r= Math.floor(Math.random()*100);
  x.innerHTML=`<h1>${r}</h1>`;
})

x.addEventListener("mouseleave",function(){
  x.innerHTML="<h1>1</h1>";
})

let y= document.getElementById("two");
clr="red";
y.addEventListener("mouseenter",function(){
  if(clr=="red"){
    y.style.backgroundColor="red";
    clr="green";
  }
  else if(clr=="green"){
    y.style.backgroundColor="green";
    clr="blue";
  }
  else{
    y.style.backgroundColor="blue";
    clr="red";

  }
})
y.addEventListener("mouseleave",function(){
  y.style.backgroundColor="white";
})

let z= document.getElementById("three");
z.addEventListener("mouseenter",function(){
  let a=Math.floor(Math.random()*256);
  let b=Math.floor(Math.random()*256);
  let c=Math.floor(Math.random()*256);
  z.style.backgroundColor=`rgb(${a},${b},${c})`

})
z.addEventListener("mouseleave",function(){
  z.style.backgroundColor="white";
})
let q= document.getElementById("four");
    q.addEventListener("mouseenter",function(){
      let a=Math.floor(Math.random()*256);
      let b=Math.floor(Math.random()*256);
      let c=Math.floor(Math.random()*256);
      
      x.style.backgroundColor=`rgb(${a},0,0)`
      y.style.backgroundColor=`rgb(0,${b},0)`
      z.style.backgroundColor=`rgb(0,0,${c})`

    })
    q.addEventListener("mouseleave",function(){
      q.style.backgroundColor="white";
      x.style.backgroundColor="white";
      y.style.backgroundColor="white";
      z.style.backgroundColor="white";
    })
