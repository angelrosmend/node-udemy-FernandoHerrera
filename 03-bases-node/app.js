//////REQUIREDS//////

//const fs = require('fs'); // Libreria incluida en node
// const fs = require('express'); //Libreria externa
// const fs = require('./fs'); //Librerias propias

//console.log(process.argv);

const {createFile} = require('./multiplicar/multiplicar');


let argv = process.argv;
let parameter = argv[2];
let base = parameter.split('=')[1]

console.log(base)



createFile(base)
     .then(file => console.log(`Archivo creado: ${ file }`))
     .catch(e => console.log(e));