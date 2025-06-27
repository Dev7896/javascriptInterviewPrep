// closures
function counter() {
  let counter = 0;
  return {
    increment() {
      counter++;
      // console.log(counter) ;
    },
    decrement() {
      counter--;
      // console.log(counter) ;
    },
    show() {
      console.log(counter);
    },
  };
}
// use case -- 1 -- data encapsulation
let counterObj = counter();
// counterObj.increment() ;
// counterObj.increment() ;
// counterObj.show() ;

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

for (var i = 0; i < 3; i++) {
  (function (i) {
    // fixed using closure
    setTimeout(() => console.log(i), 1000);
  })(i);
}

// challenge -- run a function only after it is being called n times

function after(n, fn) {
  let counter = 0;

  return function (...args) {
    counter += 1;
    if (counter >= n) {
      fn(...args);
    }
  };
}

let test = after(3, console.log);
test("hello");
test("hello");
test("hello");
test("hello");

function createBase(num) {
  return (num2) => {
    return num + num2;
  };
}

var addSix = createBase(6);
addSix(21);
addSix(20);

// const os = require('os')

// memoization

const startTime = new Date();

const memoObj = {};

function factorial(num) {
  if (num in memoObj) {
    return memoObj[num];
  }
  memoObj[num] = num * num;
  return memoObj[num];
}

console.log(factorial(12483), memoObj);

const endTime = new Date();

console.log(endTime - startTime);

// time optimization using closure

function find() {
  const a = [];
  for (let i = 1; i < 1000000; i++) {
    a[i] = i * i;
  }
  return (index) => {
    console.log(a[index])
  }
}
const closure = find() 
console.time('start')
// find(23223) ;
closure(2342)
console.timeEnd()

// module pattern

// https://www.patterns.dev/vanilla/module-pattern/


// optional chaining syntax 
// we can safely access properties of nested objects using optinal chaining syntax wihtout worrying about undefined or null values

'use strict'
const user = {
     rahul : undefined
}

console.log(user?.rahul?.name)

const obj = {
  greet() {
    return "Hello";
  }
};

console.log(obj.greet?.());  // Hello
console.log(obj.noMethod?.());  // undefined (no error)


