const array = [1, 2, 3, 4, 5, 6];

/* 1. retornar os pares */

let isPar = array.filter((valor)=>{
   return valor % 2 === 0;
})
console.log(isPar);

/* 2 */


/* // exibirá a cor CORES.GREEN se o status for success
// exibirá a cor CORES.YELLOW se o status for warn
// exibirá a cor CORES.RED se o status for error

Dica: para customizar o console.log basta colocar %c no início da mensagem e, como segundo valor, informar alguma regra de CSS. Por exemplo:

console.log('%c Esse texto é customizado', 'background: tomato;') */

const mensagem = 'Qualquer texto';
let _status = 'error';

const cores = {
    RED: '#ff0000',
    YELLOW: '#fff000',
    GREEN: '#00FF00'
};

const status1 = 'success';
const status2 = 'warning';
const status3 = 'error';


if(_status === status1){
    console.log(`%c ${mensagem}`, `background:${cores.GREEN}`);
}else if(_status === status2){
    console.log(`%c ${mensagem}`, `background:${cores.YELLOW}`);
}else if(_status === status3){
    console.log(`%c ${mensagem}`, `background:${cores.RED}`);
}

switch (_status) {
    case  status1:
        console.log(`%c ${mensagem}`, `background:${cores.GREEN}`);
        break;
    case  status2:
        console.log(`%c ${mensagem}`, `background:${cores.YELLOW}`);
        break;
    case  status3:
        console.log(`%c ${mensagem}`, `background:${cores.RED}`);
        break;
}


/*Utilizando somente if/else, escreva um programa que, à partir de uma string como [success] qualquer texto, tem o seguinte comportamento:

Imprime no console tudo certo e o status for success ou warning;
Imprime errow no console, caso seja error;
Imprime status inválido caso não seja nenhum dos status acima.*/

let status = '[success]aushuas';
let mensagem1 = '';

if(status.startsWith('[success]') || status.startsWith('[warning]') ){
    mensagem1 = 'tudo certo!';
} else if(status.startsWith('[error]')){
    mensagem1 = 'errow';
}else{
    mensagem1 = "status inválido";
}
console.log(mensagem1);