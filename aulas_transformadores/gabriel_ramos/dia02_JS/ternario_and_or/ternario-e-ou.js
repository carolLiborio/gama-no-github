/*1) Ajuste o código abaixo para utilizar ternário:*/
let status = 'success';

const message = status === 'success'
                ?'Usuário criado com sucesso'
                :status === 'warning'
                    ?'Usuário cadastrado, mas tivemos algum problema'
                    :'Ocorreu um erro ao cadastrar';
        
console.log(message)


/* 2) Aproveite o ajuste acima e extraia o ternário para uma função que recebe o status retorna a mensagem.
 Caso ela não retorne nada, exiba a mensagem Sem status'.*/

 function criarMsgPorStatus(status) {
    const message = status === 'success'
    ?'Usuário criado com sucesso'
    :status === 'warning'
        ?'Usuário cadastrado, mas tivemos algum problema'
        :'Ocorreu um erro ao cadastrar';


}