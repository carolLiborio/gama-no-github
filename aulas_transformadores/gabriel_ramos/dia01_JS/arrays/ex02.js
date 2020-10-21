/*
2) Escreva um programa que, dado o array [1, 2, 3, 4, 5] 
   deverá retornar somente o número 3.
*/
let searchArray1 = array.find((valor)=>{
   return valor == 3;
});
let searchArray2 = array.filter((valor)=>{
   return valor == 3; 
});

console.log(searchArray1);
console.log(searchArray2);