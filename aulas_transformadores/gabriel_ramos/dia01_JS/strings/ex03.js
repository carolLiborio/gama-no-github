/*
const mensagem1 = '[success] Cadastro concluído com sucesso';
const mensagem2 = '[warning] Cadastro concluído com sucesso, mas alguns dados estão inconsistentes';
const mensagem3 = '[error] Erro ao inserir cadastro';

console.log(); // deve exibir true quando verificando mensagem1
console.log(); // deve exibir false quando verificando mensagem2
console.log(); // deve exibir false quando verificando mensagem3 

*/

const mensagem1 = '[success] Cadastro concluído com sucesso';
const mensagem2 = '[warning] Cadastro concluído com sucesso, mas alguns dados estão inconsistentes';
const mensagem3 = '[error] Erro ao inserir cadastro'; 
const tipoMensagem = '[sucess]'
console.log(mensagem1.startsWith(tipoMensagem));
console.log(mensagem2.startsWith(tipoMensagem));
console.log(mensagem3.startsWith(tipoMensagem));