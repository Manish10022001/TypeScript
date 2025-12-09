// //object
// function fullName(person:{firstName:string, lastName:string}){
//     return (`${person.firstName} ${person.lastName}`)
// }
// let p = {
//     firstName:"bruce",
//     lastName:"Wayne"
// }
// console.log(fullName(p))

//interface
// interface person {
//     firstName:string,
//     lastName:string,
// }
// function fullName(person:person){
//     console.log(`${person.firstName} ${person.lastName}`)
// }
// let p = {
//     firstName:"Bruce",
//     lastName:"Wayne"
// }
// fullName(p);

//optional properties in interface
interface person {
    firstName:string,
    lastName?:string,
}
function fullName(person:person){
    console.log(`${person.firstName} ${person.lastName}`)
}
let p = {
    firstName:"Bruce",
    // lastName:"Wayne"
}
fullName(p);