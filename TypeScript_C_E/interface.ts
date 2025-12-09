//object
function fullName(person:{firstName:string, lastName:string}){
    return (`${person.firstName} ${person.lastName}`)
}
let p = {
    firstName:"bruce",
    lastName:"Wayne"
}
console.log(fullName(p))