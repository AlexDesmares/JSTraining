//FizzBuzzTest
console.log("FizzBuzzTest");

let nombre;

for (nombre = 1; nombre <= 100; nombre ++){
  let div3 = nombre % 3;
  let div5 = nombre % 5;
  if ((div3 === 0) && (div5 !== 0)){
    console.log("Fizz");
  }
  else if ((div3 !== 0) && (div5 === 0)){
    console.log("Buzz");
  }
  else if ((div3 === 0) && (div5 === 0)){
    console.log("FizzBuzz");
  }
  else {
    console.log(`${nombre}`);
  }
}

console.log("Fin du programme");