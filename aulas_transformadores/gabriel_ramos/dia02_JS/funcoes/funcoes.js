/*1) Desenvolva uma função que recebe nome e idade e retorna a mensagem Nome de usuário {nome}. Idade {idade}.*/

var dadosUsuario = (nome, idade) => {
    console.log(`Nome do usuário: ${nome}. Idade: ${idade} anos`);
}

dadosUsuario('Carolina', 25);
dadosUsuario('Lelo', 13);


/*2*/

let array = [1,2,3,4,5]
const arrayNew = [];
let arrayForEach = array.forEach((valor) => 
arrayNew.push(valor + 1));

let arrayMap = array.map((valor) => valor + 1);

console.log(arrayNew);
console.log(arrayMap);

/* 3 */

function principal(onClick) {
    const argumentos = { 
        mensagem: 'oi'
    };
    if(typeof onClick === 'function'){
        onClick(argumentos)
    }  
}

principal(null)