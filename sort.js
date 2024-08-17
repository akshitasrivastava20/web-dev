let arr=[1,6,0,4,8];
//to sort in increasing order
let brr= arr.sort();
console.log(brr);
console.log(arr);
//to sort in decreasing order
brr=arr.sort((a,b)=>b-a);
console.log(brr);
//here no changes are made in the array itself likee no changes in actual arr
arr=arr.sort();
console.log(arr);