const input = require('fs').readFileSync('stdin', 'utf8');
const valores = input.split('\n');

let qtdaDias = parseInt(valores.shift());

let qtdaAnos, qtdaMeses;

qtdaAnos = parseInt(qtdaDias / 365);
qtdaDias = qtdaDias % 365;

qtdaMeses = parseInt(qtdaDias / 30);
qtdaDias = qtdaDias % 30;

console.log(`${qtdaAnos} ano(s)\n${qtdaMeses} mes(es)\n${qtdaDias} dia(s)`)