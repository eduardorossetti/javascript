const input = require('fs').readFileSync('stdin', 'utf8');
const valores = input.split('\n');

let valor = parseInt(valores.shift());
const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);

for (let nota of notas){
    let qtdanotas = parseInt(valor / nota);
    console.log(`${qtdanotas} nota(s) de R$ ${nota},00`);
    valor = valor % nota;
}