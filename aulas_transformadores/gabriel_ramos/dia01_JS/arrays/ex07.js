/*
    7) Dado o array ['Lora', 'Logan', 'LeBeau', 'Outro'] escreva um programa que retorna um array 
    com todos os nomes que iniciam com L.
*/


let arrayNomes = ['Lora', 'Logan', 'LeBeau', 'Outro'];
let arrayFilter = arrayNomes.filter((nome) => {
    return nome.startsWith('L');
})
console.log(arrayFilter);
