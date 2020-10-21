/*
2) Escreva um script que utiliza a string 123.456 
e exibe:

Seu número sem as casas decimais;
Seu número com as casas decimais.

*/

let valor = "123.456";
let valorInt = parseInt(valor);
let valorDecimal = parseFloat(valor); //ou Number
console.log(`Valor Inteiro: ${valorInt}`);
console.log(`Valor Decimal: ${valorDecimal}`);
