let name = "rahul_acharya"; // definition using single , double or templete litrel.
// console.log(typeof name)

// split divides the string into ordered list of substrings based on delimiter wihtout altering original string and return array.
let name1 = String("rahul_another");
const nameArr = name1.split("");
// console.log(nameArr)

// console.log(name.length)

// console.log(name1.toUpperCase())
// console.log(name1.toLowerCase())

// console.log(name1[0])

// for (let char of name1){
//     console.log(char)
// }

// name1.split("").forEach((char) => {
//   console.log(char);
// });


name1[0] = 'a' ; // doesn't work
// console.log(name1)

// console.log(name1.charAt(1)) ;
// console.log(name1.charCodeAt(1)) ;
// console.log(name1[-1])

// extract string parts
let extractedString = name1.slice(0 ,  5) ;
let extractedString2 = name1.slice(-5 , -1) ;
let extractedString3 = name1.substring(-5 , -1) ;

// console.log(extractedString3)
// console.log(name1.substr(0  , 5)) // deprecated

let text = "Please visit Microsoft! Microsoft";
let newText = text.replaceAll("Microsoft", "W3Schools");
// console.log(newText)

// concat 
let concatenatedString = name1.concat(name) ;
// console.log(concatenatedString)

// console.log(undefined?.concat('rahul'))
// console.log(undefined + 'rahul') ;


// why to use concat instead of plus operator -- concat provides better readability in case of 

// console.log([1 ,2 ,3].concat( [1 , 3 ,5]))

let name3 = '       hello            world !       ' ;
// console.log(name3.trim()) ;
// console.log(name3.trimStart()) ;
// console.log(name3.trimEnd()) ;

let text2 = "Hello world!";
let result = text2.repeat(4) ;
console.log(typeof result)

