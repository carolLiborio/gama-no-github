
/*
2) Refaça o exercício número 1 do tópico Arrays utilizando Arrow Functions.
  Escreva um programa que, dado o array [1, 2, 3, 4, 5] 
    deverá exibir: [2, 3, 4, 5, 6].

    Utilizando forEach;
    Utilizando map.

*/

let array = [1,2,3,4,5]
const arrayNew = [];
let arrayForEach = array.forEach((valor) => 
arrayNew.push(valor + 1));

let arrayMap = array.map((valor) => valor + 1);

console.log(arrayNew);
console.log(arrayMap);