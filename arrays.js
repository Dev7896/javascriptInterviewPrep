const arr = [];

function greet(name) {
  return "welcome " + name;
}

arr.push("rahul");
arr.push(true);
arr.push(greet);

// console.log(arr)

// indexing

// console.log(arr[2]('rahul'))

arr[2] = "acharya";

// console.log(arr)

// console.log(arr.toString()) ;

// console.log(arr.join('_'))

// arr.push('rahul')

arr.unshift("mr.");
// arr.push(1 ,2 ,3)

// console.log(arr.splice(3 , 1 , 'acharya_01')) // returns elements that have removed from original array

// console.log(arr.slice(0 ,3))

// arr.pop() ;  // returns element that have removed
// arr.shift() ;

// searching element

arr.push("rahul");

// console.log(arr.indexOf('rahul'))
// console.log(arr.lastIndexOf('rahul'))
// console.log(arr.includes('rahul-acharya'))

// console.log(arr.length)

// delete arr[1] ;
// arr.splice(1  ,1 ) // for removing elements in between the array

// console.log(Array.isArray(arr))

let arr1 = arr; // shallo copy
// console.log(arr1 === arr)

arr1.push("fortestingpurpose");
// arr1  = null ;
// console.log(arr)
// console.log(arr1)

const arr2 = new Array(1, 2, 3, 4);
console.log(arr2)
console.log(arr2[-1])// does not support negative indexing
console.log(arr2.at(-1)) // for that ther is at method
console.log(arr2[5])

const arr3 = [...arr2];

arr3.push(5);
// const arr4 = structuredClone()
const arr4 = arr3.slice(0, arr3.length);

// console.log(arr3)
// console.log(arr2)

// console.log(arr4)

// console.log(arr3 == arr2)
// console.log(arr3 === arr2)

// const arr5 = arr3.concat(arr)

// let arr5 ;

// console.log(arr5 = arr3 + arr)
// console.log(typeof arr5 )

// console.log(arr)

// how to remove duplicates from array

console.log([...new Set(arr)]);

// flatterning

const arr6 = [1, [2, 3, [4, 5, 6]]];
console.log(arr6.flat(Infinity));

// map() method

// -- returns new array by applying function to each element

const names = ["jhon", "rahul"];

const namesUppercase = names.map((name) => name.toUpperCase());
console.log(namesUppercase);

const nums = [1, 2, , 3, 4, 5, , 6, 7, 8];
const even = nums.filter((n) => n % 2 == 0);
console.log(even);

const users = [{ age: 17 }, { name: "rahul", age: 20 }];
// const adults = users.filter(user => user.age >= 18); // [{ age: 20 }]

const newUsers = users.filter((person) => person.age >= 18);
console.log(newUsers);

const emptyObj = {};
emptyObj["apple"] = (emptyObj["apple"] ?? 0) + 1;
console.log(emptyObj);

// what is side effect

const prices = [100, 200, 300];

// Expected: [118, 236, 354]

const updatedPrices = prices.map((price) => price + (price * 18) / 100);
console.log(updatedPrices);

const users1 = [
  { name: "Alice", verified: true },
  { name: "Bob", verified: false },
];

// Expected: [{ name: 'Alice', verified: true }]

const updatedUsers = users1.filter((user) => user.verified === true);
console.log(updatedUsers);

const names1 = ["John", "Sarah"];

names1.forEach((name) => console.log("hey , " + name + "!"));

const cart = [
  { item: "Laptop", price: 50000 },
  { item: "Mouse", price: 500 },
];

// Expected total: 50500

const totalValue = cart.reduce((acc, item) => {
  acc += item.price;
  return acc;
}, 0);

console.log("Total bill is " + totalValue);

const students = [
  { name: "A", score: 40 },
  { name: "B", score: 60 },
  { name: "C", score: 70 },
];

// Expected: (60+10) + (70+10) = 150

function filterOutstudents(student) {
  if (student.score >= 50) {
    return true;
  }
}

function addBonusPoints(student) {
  return student.score + 10;
}

function calculateTotalScore(acc, score) {
  acc += score;
  return acc;
}
const totalScore = students
  .filter(filterOutstudents)
  .map(addBonusPoints)
  .reduce(calculateTotalScore, 0);
console.log("total score is " + totalScore);

const obj = [
  {
    key: "sample1",
    data: "data1",
  },
  {
    key: "sample1",
    data: "data1",
  },
  {
    key: "sample1",
    data: "data1",
  },
  {
    key: "sample2",
    data: "data1",
  },
  {
    key: "sample3",
    data: "data1",
  },
  {
    key: "sample4",
    data: "data1",
  },
];

// function modifyObj(object) {
//   var output = {};
//   object.foreach((property) => {
//     if (property.key in output) {
//       output[property.key].push(property);
//     } else {
//       output[property.key] = [];
//       output[property.key].push(property);
//     }
//   });

//   return output;
// }

function modifyObj(obj) {
  var output = {};
  for (let i = 0; i < obj.length; i++) {
    if (property.key in output) {
      output[property.key].push(property);
    } else {
      output[property.key] = [];
      output[property.key].push(property);
    }
  }
  return output ;
}

let result = modifyObj(obj);
console.log(result);
