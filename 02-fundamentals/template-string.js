let name = 'Batman';
let real = 'Bruce Wyne';


console.log( name + ' is ' + real)
console.log(`${name} is ${real}`)

function getName() {
 return `${name} is ${real}`;
}

console.log(`Real name of ${getName()}`);