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

function modifyObj(...object) {
  var output = {};
  object.forEach((property) => {
    if (property.key in output) {
      output[property.key].push(property);
    } else {
      output[property.key] = [];
      output[property.key].push(property);
    }
  });

  return output;
}

// function modifyObj(obj) {
//   var output = {};
//   for (let i = 0; i < obj.length; i++) {
//     if (obj[i].key in output) {
//       output[obj[i].key].push(obj[i]);
//     } else {
//       output[obj[i].key] = [];
//       output[obj[i].key].push(obj[i]);
//     }
//   }
//   return output;
// }

let result = modifyObj(...obj);
console.log(result);

const add = (a, b) => a + b;

function memoize(fn) {
  let inputTrackingObj = {};
  return (a, b) => {
    if ([a, b] in inputTrackingObj) {
      return inputTrackingObj[[a, b]];
    } else {
      let result = add(a, b);
      inputTrackingObj[[a ,b]] = result ;
      return result ;
    }
  };
}

let memoizeAdd = memoize(add);
console.time();
console.log(memoizeAdd(4, 5));
console.timeEnd();

console.time();

console.log(memoizeAdd(4, 5));
console.timeEnd();


// implement custom once function 

const greet = (...args) => args.forEach( name => console.log('hello ' + name)) ;

// hof
function once(fn){
    const called = false ;

    return (...args) => {
        if(!called){
            fn(...args) ;
        }
    }
}

let greeting = once(greet) ;
greeting('rahul')

// custom function for error with message tag // output == [error] : message

function log(fn){
    return (error , message) => {
        fn(`[${error}] : ${message}`)
    }
}

// let printError = log(console.log) ;
// printError('referenceError' , 'called before initialization')

log(console.log)('referenceError' , 'called before initialization')

const log = error => message => console.log(`[${error}] : ${message}`) ;

log('referenceError')('called before initialization') ;

// setTimeout == executes function once after specified delay

// setInterval == executes function repeatedly evert x miliseconds