# Objects in javascript

objects are collection of properties and properties are basically key : value pair

objects are mutable. 

in javascript , everything is an object.

---
## Intreview Question 1 :

#### what is stringify and parse method and why it is used ?
JSON  is a buil-in object in javascript.there two methods related to it stringify and parse.

we can't directly store an object in localstorage or sessionstorage we use stringify to convert it into string format then we store likely we use parse method to convert it back to javascript basic object 

we want to stringify the particular peroperty in object then we use [] to pass keys 

const user = {
    name : 'rahul' ,
    age : 21 ,
    healthy : true
}

JSON.stringify(user , ['age' , 'healthy']) ;

---
## Interview Question 2 :


#### what is the output of the code ?

const a = {}
const b = {key : 'b'}
const c = {key : 'c'}

a[b] = 123 ;
a[c] = 456 ;
console.log(a[b])

output : 456
---

## Interview Question 3 :

#### add , delete and modify the properties of an object.
code and output

## Interview Question 4 :
#### what is spread operator ?

The spread operator (...) in JavaScript is a versatile feature introduced in ES6 that allows you to expand elements of an iterable (like arrays, strings, or objects) into places where multiple elements or properties are expected. 

code : 

const arr1 = ['orange' ,2 ,3]
const arr2 = [...arr1 , 5  ,6, 7]

const myObj = {
  a : 100 ,
  b : 200 ,
  title : 'my nums '
}

const myObj2 = {...myObj}
console.log(myObj2)

## Interview Question 5 :

#### what is desctructuring ?

desturcturing allows you to extract values from properties or object into local variables.

const person = {
username : 'rahul' ,
age : 21 ,
healthy : true
}

const {username , age } =  person ;
console.log(username , age)

const  [one ,two ,  three ]=  arr1 ; 

## Interview Question 6 :

#### what is the output ?

let e = {
  greeting : 'hey !'
}
let f ;

f = e ; // we are storing complete reference of e into f any change in e will affect f untill the changes are in property

e.greeting = 'hello'
console.log(e.greeting)

output : 
hello

## Interview Question 7 :

#### what is the output ?

let e = {
  greeting : 'hey !'
}
let f ;

// const arr3 = [e] ;
f = e ; // we are storing complete reference of e into f any change in e will affect f untill changes are in property


e = null ;
console.log(f)

output : 
{
  greeting : 'hey !'
}

## Interview Question 8 :

#### what is the output ?

const value = { number: 10 };
const multiply = (x = { ...value }) => {
console.log((x.number *= 2));
};
multiply(); // 20
multiply(); // 20
multiply(value); // 20
multiply(value); // 40

output :
20 
20
20 
40
cause in third time ,we are passing value as argument so the reference of value will get stored in x then any change in x will reflect in value   

## Interview Question 9 : 

#### How to do deep copy / clone an object ?

// first way -- using global Object 
const user1  = {
  name : 'alex' ,
  age : 21
}

const user2 = Object.assign({} , user1) ;


// second way --  using JSON object 
const user3 = JSON.parse(JSON.stringify(user1)) 


// third way -- spread operator
const user4 = {...user1}
console.log(user4)