
/* 2) Aproveite o ajuste acima e extraia o ternário para uma 
função que recebe o status retorna a mensagem.
Caso ela não retorne nada, exiba a mensagem Sem status'.*/

function criaMensagemPorStatus (status) {

    const message = status === 'success'
        ? 'Usuário criado com sucesso'
        : status === 'warning'
            ? 'Usuário cadastrado, mas tivemos algum problema'
            : status === 'error' ? 'Ocorreu um erro ao cadastrar' : undefined;

    return message || 'Sem status';
}

console.log(criaMensagemPorStatus('outro status qualquer'));

//Neste caso, o uso do switch deixaria mais organizado

   /*   switch (status) {
      case 'success':
         return 'Usuário criado com sucesso';
      case 'warning':
            return 'Usuário cadastrado, mas tivemos algum problema';
      case 'error':
            return 'Usuário cadastrado, mas tivemos algum problema';
      default:
            return 'Sem status';
    } */