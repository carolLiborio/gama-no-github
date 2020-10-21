/*
3) Utilizando somente if/else, escreva um programa que,
à partir de uma string como [success] qualquer texto, tem o seguinte comportamento:

Imprime no console tudo certo e o status for success ou warning;
Imprime errow no console, caso seja error;
Imprime status inválido caso não seja nenhum dos status acima.

*/

let status = '[success]aushuas';
let mensagem = '';

if(status.startsWith('[success]') || status.startsWith('[warning]') ){
    mensagem = 'tudo certo!';
} else if(status.startsWith('[error]')){
    mensagem = 'errow';
}else{
    mensagem = "status inválido";
}
console.log(mensagem);