const input = require('fs').readFileSync('stdin', 'utf8');
const valores = input.split('\n');

let qtdaSegundos = parseInt(valores.shift());

let qtdaHoras = parseInt(qtdaSegundos / 3600);
qtdaSegundos = qtdaSegundos % 3600;

let qtdaMinutos = parseInt(qtdaSegundos / 60);
qtdaSegundos = qtdaSegundos % 60;

console.log(`${qtdaHoras}:${qtdaMinutos}:${qtdaSegundos}`)