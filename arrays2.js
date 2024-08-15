 const arr=[2,4,6,9];//datatype won't chng now
 arr=true;
 console.log(arr);

arr1=[4,true,"debu"];
console.log(arr);
//two d array
brr=[[2,4,8],[1,3,5,7]];
console.log(brr);

arr=[1,2,3,4,5,4];
//forof  loop chnges in array can't be made and index can't be printed as copy of every element is printed via ele and not the actual element
for (const element of arr) {
    console.log(element);
    
}

// for each loop index can be printed but no chnges can be made in actual array
arr.forEach((element,i) => {
    console.log(element,i);
    
});
