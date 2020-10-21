/*1) Escreva um script que lista todos os dados do array ['Lora', 'Logan', 'LeBeau'].
Utilizando while;
Utilizando for.*/
const array =  ['Lora', 'Logan', 'LeBeau'];
let contador = 0;
while (contador < array.length) {
    console.log(array[contador])
    contador++;
}

for (let i = 0; i < array.length; i++) {
   console.log(array[i]);
}

/*2) Escreva um script que perturbe o usuário e fique mostrando o alerta com a mensagem 
Clique em ok! até que o usuário clique em ok. Você deverá usar do/while e o comando confirm,
 que abrirá no navegador um alerta para o usuário confirmar.*/

 do {
 } while (!confirm('click no ok'));

while (!confirm('click no ok')){}