export {}

//boolean, number, string type
let isBegineer : boolean = true;
let total : number = 0;
let name : string = "Manish"
console.log(isBegineer, total, name);

//template Literal
let sentence : string = `My name is ${name}
I am Begineer in TypeSript`;
console.log(sentence);

//null and undefined , not much use on their own
let n : null = null;
let u : undefined = undefined;

//null and undefined used with number, boolean or string type
let isNew : boolean = null;
let myName: string = undefined;
console.log(isNew, myName, n, u);

//Array of values
let list1 : number[] = [1,2,3];      //syntax 1
let list2 : Array<number> = [4,5,6]; //syntax 2
console.log(list1,"\n",list2);