// Anonymous functions cannot exist without a variable: Exception
// Immediately Invoked Function Expression - IIFE

/*
(function () {
    console.log("Hello, it works!")
})

// How to invoke this function?

*/

(function () {
    console.log("Hello, it works!")
})();

(function (message) {
    console.log(message)
})("IIFE Class");

((message) => {
    console.log(message)
})("IIFEs can be arrow function as well.")

// 3 Important Aspects
/* 
Three Important aspects:
1. IIFEs don't  pollute the global object
2. IIFEs create a restricted scope for variable declaration 
(as any other regular function)
3. They're only invoked once: at the moment of their creation

Pay attention to:
When you have 2 IIFEs (one after another) you need to add a semicolon
at the end of the first one, otherwise, JS would be interpreting 
that we are passing an anonymous function as a parameter 
to another anonymous function.
 */