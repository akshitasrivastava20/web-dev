// callback function ek esa function hota h jo kisi or function ke andar pass hota h
function products(a,b,c){
    return a*b*c;

}
function fun(products,x){
    
    return products-x;
}
console.log(fun(products(2,3,4),7));