/*
1) Complete o script abaixo. Ele deve exibir o valor final em Reais, 
considerando somente 2 casas decimais.
*/

let valor1 = 123.456;
let prefixo = 'R$';
let valorFormatado = valor1.toFixed(2).replace('.',',');
console.log(prefixo + valorFormatado);
console.log(`R$${valorFormatado}`);