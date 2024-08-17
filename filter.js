// filter is used to filter out certain array members and keep the remaining
let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr);
//let say we have to filter out even numbers


let brr=arr.filter ((ele)=>{
   return (ele%2==0)? false: true;// using ternary operator
});
console.log(brr);