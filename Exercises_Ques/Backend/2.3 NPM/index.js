// var generateName = require('sillyname');
// var sillyName1 = generateName();
// var sillyName2 = generateName();

// console.log(sillyName1 + " vs "+ sillyName2);

// const superheroes = require('superheroes');
import superheroes from 'superheroes';
 
// superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
var superheroName= superheroes.random();
console.log(`My name is mighty ${superheroName}`);
//=> 'Spider-Ham'