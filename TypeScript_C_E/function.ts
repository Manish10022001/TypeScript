export {}
function add(num1:number, num2:number): number{
    return num1+num2;
}
add(4,5);
//add(4,"abc"); error
console.log(add(4,5));

//optional parameter
function sub(num1:number, num2?:number){
    if(num2)
        return num1-num2
    else
        return num1;
}
console.log(sub(4,2));
console.log(sub(3));