const person = {
    name: 'Sai',
    age: 26,
    greet ()  {console.log("Hi "+ this.name)}
}
const copied = {...person}
console.log(copied)

const {name, age} = person
console.log(name)
