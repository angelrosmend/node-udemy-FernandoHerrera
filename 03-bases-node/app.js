//////REQUIREDS//////

const fs = require('fs'); // Libreria incluida en node
// const fs = require('express'); //Libreria externa
// const fs = require('./fs'); //Librerias propias



let base = 5;
let data = ''

for(let i = 1; i <= 10; i++){
  data +=`${base} * ${i} = ${base * i}\n`
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
 
 if (err) throw err;

 console.log( `El archivo tabla-${base}.txt ha sido creado`);
});

