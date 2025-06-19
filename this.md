# this keyword in javascript

In javascript , this is a keyword that refers to a object it is currentlyy executing within.

## what is binding ?

Default Binding:
When a function is called outside of any object, this refers to the global object (window in browsers), unless in strict mode. This is known as default binding.

Implicit Binding:
When a function is called using the dot notation (e.g., obj.fn()), this refers to the object before the dot — the one the function is being called on — as long as the function is not an arrow function.

Explicit Binding:
When a function is defined outside an object, and we want to bind it to a specific object, we can use .call(), .apply(), or .bind(). This is known as explicit binding.

call() : immediately calls the function and arguments are provided one by one.
apply() : immediately calls and arguments are passed as an array.
bind() : returns a function copy with this keyword permanently set to given value and arguments are passed one by one.original function is not called and can be called later.

// function makeUser(){
//   return {
//     name : 'rahul' ,
//     ref(){
//         return this ;
//     }
//   }
// }

// const user = makeUser() ;

// console.log(user.ref().name)

const user = {
  name: "Piyush Agarwal!",
  logMessage() {
    console.log(this.name);
  },
};

// setTimeout(() => {
//   user.logMessage();
// }, 1000);

// https://roadsidecoder.hashnode.dev/javascript-interview-questions-this-keyword-output-based-scope-implicit-binding-etc

'use strict'
// const testingObj = {
//     name : 'rahul' ,
//   test() {
//     console.log(this.name);
//   },
// };
// testingObj.test();


function greet(name , name2){
    console.log('welcome ' + this.name) ;
    console.log(name , name2)
}

// greet.call(user) ;

// const bindUserGreet = greet.bind(user , 'rahul' , 'acharya') ;
// bindUserGreet() ;

greet.apply(user , ['rahul' , 'acharya'])


## what is output and why ?

const person = { name: "Max" };
function printName() {
  console.log(this.name);
}
const boundFunc = printName.bind(person);
boundFunc.call({ name: "Leo" });

output : 
        max


