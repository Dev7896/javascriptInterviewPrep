# scope and hoisting

✅ What is Scope?
Scope determines where variables, functions, and objects are accessible in your code.

🔸 Types of Scope
Global Scope

Accessible from anywhere in the code.

Function Scope

Variables declared inside a function are only accessible within that function.

Block Scope (ES6+)

let and const are block-scoped, meaning they exist only inside {}.

example :
function testScope() {
  let a = 10; // block scoped
  if (true) {
    var b = 20; // function scoped
    let c = 30; // block scoped
  }
  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // ❌ ReferenceError
}

In JavaScript, variable and function declarations are moved (hoisted) to the top of their scope during the compilation phase — but not their initializations.

console.log(a); // undefined (hoisted)
var a = 5;

console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 10;

var is hoisted and initialized as undefined.

let and const are hoisted but not initialized — they are in a Temporal Dead Zone (TDZ).

---

### hoisting 


sayHello(); // ✅ Works (function declaration is hoisted)

function sayHello() {
  console.log("Hello!");
}

sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi = function () {
  console.log("Hi!");
};


Function declarations are fully hoisted.

Function expressions using var are hoisted as undefined.

what is tdz temporal dead zone ?

if variable is delcared using let or const so it is hoisted but not initialized so you can't use it cause it will throw referenceError 
that timeperiod is called as tdz .