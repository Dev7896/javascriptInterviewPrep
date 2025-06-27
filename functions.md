## what is anonymous function ?

A function not having it's own name or identifier .

implement ways :

// first way
const greet = function (name){
    console.log('welcome ' + name ) ;  
}

// iife syntax 
(function (name){
    console.log('welcome ' + name ) ;  
})('jhon');

// setTimeout
setTimeout(function (name = 'jhon'){
    console.log('welcome ' + name ) ; 
} , 1000)

## what is pure function ?

A pure function is a function that:

Always returns the same output for the same input.

Has no side effects — it doesn’t modify external variables, change the DOM, or perform I/O like API calls or file writing.
