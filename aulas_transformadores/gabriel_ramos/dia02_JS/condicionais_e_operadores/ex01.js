/*
1) Dado o array [1, 2, 3, 4, 5, 6], escreva um programa que retorna um
 novo array, contendo somente os valores pares, nesse caso, deverá retornar
[2, 4, 6]. Dica: operador de módulo % pode ajudar nessa tarefa.

*/

const array = [1, 2, 3, 4, 5, 6];

let Par = array.filter((valor)=>{
   return valor % 2 === 0;
})
console.log(Par);