// how do you make setTimeout behave like a loop

function loop(i){
    if (i > 5) return ;
    console.log(i) ;
    setTimeout(() => {
        return loop(i + 1) ;
    }, 1000 );
}
loop(0) ;

for (var i = 0; i < 3; i++) {
  function closure(i){
    setTimeout(() => console.log(i), 1000);
  }
  closure(i) ;
}

let i = 0 ;
let timeId = setInterval(() => {
    if (i >5 ) clearInterval(
    ) ;
    console.log(i) ;
    i += 1 ;
}, 1000 );
