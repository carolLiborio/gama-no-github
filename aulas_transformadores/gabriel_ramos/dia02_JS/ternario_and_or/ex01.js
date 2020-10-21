/*1) Ajuste o código abaixo para utilizar ternário:
    let status = 'success';

    let message = '';

    if (status === 'success') {
        message = 'Usuário criado com sucesso';
    } else if (status === 'warning') {
        message = 'Usuário cadastrado, mas tivemos algum problema';
    } else if (status === 'error') {
        message = 'Ocorreu um erro ao cadastrar';
    }

    console.log(message);

*/
let status = 'success';

const message = status === 'success'
                ?'Usuário criado com sucesso'
                :status === 'warning'
                    ?'Usuário cadastrado, mas tivemos algum problema'
                    :'Ocorreu um erro ao cadastrar';


//resolução usando operadores
 const message1 = status === 'success'
    ? 'Usuário criado com sucesso'
    : status === 'warning'
        && 'Usuário cadastrado, mas tivemos algum problema'
        || 'Ocorreu um erro ao cadastrar'
        
console.log(message)
console.log(message1)