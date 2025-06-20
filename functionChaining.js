// function chaining = it is pattern where multiple function calls are linked together 

const calculator = {
    total :  0 ,
    add (n)  {
        this.total  += n ;
        return this ;
    } ,
    subract (n) {
        this.total -=  n ;
        return this ;

    }
}

// why return this = when funtion returns object so that you can continue calling other methods on it.

calculator.add(10).subract(10) ;
// console.log(calculator.total) ;

// implement chainable counter 
const counter = {
    counter : 0 ,
    increment (){
        this.counter +=1 ;
        return this
    } ,
    decrement  (){
        this.counter -= 1 ;
        return this
    } ,
    print(){
        console.log(this.counter) ;
        return this
    }
}

// counter.increment().increment().decrement().print() ;

class Chain {
  constructor() {
    this.value = 0;
  }
  inc(n = 1) {
    this.value += n;
    return this;
  }
  dec(n = 1) {
    this.value -= n;
    return this;
  }
  show() {
    console.log(this.value);
    return this;
  }
}

const counter2 = new Chain() ; // Output: 3
counter2.inc().dec().dec().show() ;
console.log(globalThis)

let d = {
  name : 'rahul'
}

const e = d ;

d = null ;

console.log(e)

function parent (){
  const user = {
    name : 'rahul'
  }
   return () =>{
    console.log(user.name)
    return () =>{
      console.log(user.name)
    }
   }
}

let secondFunc = parent() ;

const thirdfunc = secondFunc() ;
thirdfunc()  ;


function test2(){
  laekedVar = 'global variable' ;
}

test2() ;

console.log(laekedVar
)


