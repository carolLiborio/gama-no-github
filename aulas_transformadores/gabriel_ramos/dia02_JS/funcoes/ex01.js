/*1) Desenvolva uma função que recebe nome e idade e retorna a 
mensagem Nome de usuário {nome}. Idade {idade}.*/

var dadosUsuario = (nome, idade) => {
    console.log(`Nome do usuário: ${nome}. Idade: ${idade} anos`);
}

dadosUsuario('Carolina', 25);
dadosUsuario('Lelo', 13);


//Outras formas de resolução 

var boasVindas = (nome, idade) => {
      const mensagem = `Nome de usuário {nome}. Idade {idade}.`;
     return mensagem.replace('{nome}', nome).replace('{idade}', idade);
}
    
var boasVindas2 = (nome, idade) => `Nome de usuário {nome}. Idade {idade}`
.replace('{nome}', nome)
.replace('{idade}', idade);
    
console.log(boasVindas('Carolina', 25));
console.log(boasVindas2('Silvana', 54));






