/*
2) Extra: antigamente, alguns exercícios de lógica pediam para trocar os valores da variável a e da variável b. Da seguinte forma:

let a = 1;
let b = 2;
let auxiliar;

aux = b;
b = a;
a = aux;

console.log(`a = ${a}, b = ${b}`);
Como podemos fazer isso sem criar a variável aux, somente utilizando desestruturação?

*/

let a = 1;
let b = 2;

[b, a] = [a, b];

console.log(`a = ${a}, b = ${b}`);