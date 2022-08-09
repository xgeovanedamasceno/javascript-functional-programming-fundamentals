// Function Declaration

// D.R.Y - Don't Repeat Yourself

function greet(name) {
    return `Hello, ${name}!` // -> string interpolation
}

console.log(greet("John"))
console.log(greet("Philip"))
const greetMessage = greet("Ann")

console.log(greetMessage)

