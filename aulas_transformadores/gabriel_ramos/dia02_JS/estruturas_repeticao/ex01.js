/*
1) Escreva um script que lista todos os dados do array ['Lora', 'Logan', 'LeBeau'].
Utilizando while;
Utilizando for.
*/

//while
const array =  ['Lora', 'Logan', 'LeBeau'];
let contador = 0;
while (contador < array.length) {
    console.log(array[contador])
    contador++;
}

//for
for (let i = 0; i < array.length; i++) {
   console.log(array[i]);
}