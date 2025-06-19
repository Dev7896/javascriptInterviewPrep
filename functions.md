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