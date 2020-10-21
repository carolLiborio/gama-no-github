/*
1) Adapte o exercício 1 do tópico Funções para utilizar template 
strings ao invés de concatenar as variáveis nas strings.
  EX01- FUNÇÔES =>  Desenvolva uma função que recebe nome e idade e retorna a 
                    mensagem Nome de usuário {nome}. Idade {idade}
*/

const boasVindas = (nome, idade) => `Nome de usuário ${nome}. Idade ${idade}.`;
console.log(boasVindas('Carolina', 25));