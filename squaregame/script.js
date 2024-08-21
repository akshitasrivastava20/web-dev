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
let q= document.getElementById("four");

