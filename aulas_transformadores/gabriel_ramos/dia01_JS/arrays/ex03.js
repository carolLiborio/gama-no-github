/*
3) Escreva um programa que, 
dado o array [1, 2, 3, 4, 5] deverá 
retornar a soma dos itens desse array, totalizando 15.

Utilizando forEach;
Utilizando reduce.

*/

let arrayReduce = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})

let soma = 0;
let arrayFor = array.forEach((valor) =>{
soma += valor;
})

console.log(arrayReduce);
console.log(soma);