try {
  // reference error
  let c = 6;
  console.log(d);

  // typeerror
  const obj = null;
  console.log(obj.name);
} catch (error) {
    console.log('error occured')
}

// try...catch block can only catch runtime errors not syntax errors

try {
  // console.log('rahul acharya' ) ;
  console.log(asf);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  // console.log(error.stack)
}

function divide(a, b) {
  if (b === 0) {
    // throw new Error("Cannot divide by zero!");
    // return {error  : new Error('cannot divide by zero')}
    return new Error('cannot divide by zero ')
  }
  console.log('after error message....')
  return a / b;
}


try{
    divide( 1, 0) ;
}catch(error){
    console.log('error occured')
}finally{
  console.log('it is used for resource cleanup or closing opened resources ') // it is imp to close resources other wise it can cause data curreption  , leaks
}


// class NotFoundError extends Error {
//   constructor(message){
//     super(message) ;
//     this.name = 'NotFoundError' ;
//     this.statusCode = 404 ;

//   }
// }

// const error = new NotFoundError('wrong file exempted') ;
// console.log(error.name , error.statusCode)
// throw error ;

