

function m(){
    console.log("mello");
}
setTimeout(function (){
    console.log("hello");
},2*1000);

setTimeout(h,2*1000);
setTimeout(m,1*1000);
// settimeout is callback function as it is a function and it takes a function
// to print numbers from 1 to 10 with delay of one sec
let i=10;
for(i=1;i<=10;i++){
   setTimeout(function(){console.log(i)},i*1000);
}
