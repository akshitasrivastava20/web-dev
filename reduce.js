//it takes two pairs from left to right from given array evaluates and then stores in first variable and take new number in third variable
let arr=[1,2,3,4,5];
console.log(arr);
let brr= arr.reduce(function(a,b){
   return a+b;
})
console.log(brr);