// object oriented programing has main object that contains two things data(property) and behavior (method)

// const User = {
//   username: "",
//   setName(name) {
//     this.username = name;
//   },
// };
// User.setName("rahul");
// console.log(User.username);

// second way
// function User(name) {
//   this.name = name;
// }

// // every object has access to another object known as prototype , is an object primary purpose is inheritance

// User.prototype.greet = function () {
//     console.log('welcome ' + this.name) ;
// }

// const user1 = new User('rahul') ;

// user1.greet() ;

// we can access the prototpe object using below ways
// console.log(user1.__proto__)
// console.log(Object.getPrototypeOf(user1))

// prototype chain -- when a property or method is accessed then javscript engine first looks on that object if not found then looks in prototype or another object
// connected to it and keep going untill it is not found known as prototpe chain

// third way
// class User {
//     constructor(name){
//         this.name = name ;
//     }
//     greet(){
//         console.log('welcome ' + this.name) ;
//     }
// }

// const user2 = new User('rahul') ;
// user2.greet() ;

// inheritance using plain object
// prototypla inheritance -- when one object inherits from another object via prototypal linkage

// const animal = {
//     eats : true
// }

// const dog = Object.create(animal) ;
// dog.barks = true ;

// console.log(dog.eats)
// console.log(dog.barks)

// inheritance using class introduced in es6

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log("animal can speak....");
  }
  bark() {
    console.log("some animals bark");
  }
}

class dog extends Animal {
  walk() {
    console.log("animal can walk....");
  }
  // method overriding -- child class implements specific method which is already been declared in parent class with same name but , implementations can be different
  // overrided method
  bark() {
    console.log("dogs can bark");
  }
}

const myDog = new dog();

// myDog.speak();
// myDog.walk();
// myDog.bark(); // output -- dogs can bark

// class StaticDemo {
//   static name = "rahul acharya";
//   constructor(username) {
//     this.username = username; // instance variable
//   }
//   static add(a , b){
//     console.log('welcome ' + StaticDemo.name) ;
//     return a + b ;
//   }
// }


// const staticdemo = new StaticDemo('rahul1234') ;
// console.log(staticdemo.username) ;
// StaticDemo.add( 1, 2)


// console.log(staticdemo instanceof StaticDemo) // also i can use isPrototypeOf method


class A {
    static anotherName = 'another name' ;
    constructor(name){
        this.name = name ;
    }
    say(){
        console.log('we are saying')
    }
}

class B extends A {
    constructor(name){
        super(name) ;
    }
    walking(){
        console.log(this.name + ' is walking')
        console.log(A.anotherName) ;
        super.say() ;
    }

}

const b = new B('rahul') ;
b.walking() ;


function A() {}
A.prototype.val = 10;

const obj = new A();
A.prototype.val = 20;

console.log(obj.val);
