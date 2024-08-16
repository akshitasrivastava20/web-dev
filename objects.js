//object is like map or dictionary whwere w e have key value pairs
// creating an object
let x={
    name:"akshita",
    "nick name":"sweety",
    age:19,
    percentage: 94.6
};
console.log(x)
// // object name can have spaces but it should be in quotes
// // to print a particular key value use dot operator
// //to print a key value where key is string use square brackets
// console.log(x["nick name"]);
// console.log(x.age);
// x.age=20;
// console.log(x.age);
for (const key in x) {
    if (Object.prototype.hasOwnProperty.call(x, key)) {
       console.log(key,x[key]);
        
    }
}

