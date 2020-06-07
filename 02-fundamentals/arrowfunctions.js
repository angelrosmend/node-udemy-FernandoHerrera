

//function add(a, b) {
// return a + b;
//}

//let add = (a,b) => {
// return a + b
//}

let add = (a,b) => a + b; //we can spare the curly braces if the argument is a single line code

console.log(add(1,2));

let greet = name => `Hallo ${name}`;

console.log(greet('Wolfgang'));