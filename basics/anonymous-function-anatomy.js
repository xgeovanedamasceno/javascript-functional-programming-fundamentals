// Anonymous Function
const greeter = function (name) {
    return `Hello, ${name}!` // -> string interpolation
}

console.log(greeter("John"))
console.log(greeter("Philip"))
const greetMessage = greeter("Ann")

console.log(greetMessage)

const greeterReference = greeter
console.log(greeterReference("Peter"))