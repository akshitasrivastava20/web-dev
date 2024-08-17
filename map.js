// map means we need to make an array from our existing array with some specific changes based on relations
let arr=[1,2,3,-4];
console.log(arr);
function twice(ele){
    return ele*2;

}
function square(ele){
    return ele*ele;
}
function plusten(ele){
    return ele+10;
}
let brr=[];
for (const element of arr) {
     brr.push(Math.abs(element));
}
console.log(brr);
// map is a callback function that is it takes a function as its parameter
 brr=arr.map(function(ele){
    return ele*ele*ele;
});
console.log(brr);

//to make changes in the same array
 arr=arr.map((ele)=>{
     ele*ele*ele;
});
console.log(brr);
