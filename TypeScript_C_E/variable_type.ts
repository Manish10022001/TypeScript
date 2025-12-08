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

//tuple :-> use when fixed number of values with different types
let person1 : [string,number] = ["manish", 24];
console.log(person1);

//enum -> give friendly names to a set of numeric values
enum Color {Red = 5, Green, Blue};
let c : Color = Color.Green;
console.log(c)

// any type 
let randomValue : any = 10;
randomValue= true;
console.log(randomValue);
randomValue="Manish";
console.log(randomValue);

//unknown type
let myVariable : unknown = "manish"

function hasName(obj: any) : obj is {name:string}{
    return !!obj && typeof obj === "object" && "name" in obj
}
if(hasName(myVariable)){
    console.log(myVariable.name);
}
(myVariable as string).toUpperCase();
