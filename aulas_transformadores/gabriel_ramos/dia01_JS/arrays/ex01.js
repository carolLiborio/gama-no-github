/*
1) Escreva um programa que, dado o array [1, 2, 3, 4, 5] 
deverá exibir: [2, 3, 4, 5, 6].

Utilizando forEach;
Utilizando map.

*/

let array = [1,2,3,4,5]
const arrayNew = [];
let arrayForEach = array.forEach((valor)=> {
    arrayNew.push(valor + 1);
})


let arrayMap = array.map((valor) => {
    return valor + 1;
 })
 
 console.log(arrayNew);
 console.log(arrayMap);