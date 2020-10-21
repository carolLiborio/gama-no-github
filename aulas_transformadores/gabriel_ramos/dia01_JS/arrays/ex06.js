/*
 6) Dado o seguinte array:
 const mensagens = [
    '[success] Cadastro_concluído_com_sucesso',
    '[warning] Cadastro_concluído_com_sucesso,_mas_alguns_dados_estão_inconsistentes',
    '[error] Erro_ao_inserir_cadastro'
]
    Escreva um script que retorna ['success', 'warning', 'error'].

 */

const messages = [
    '[success] Cadastro_concluído_com_sucesso',
    '[warning] Cadastro_concluído_com_sucesso,_mas_alguns_dados_estão_inconsistentes',
    '[error] Erro_ao_inserir_cadastro'
]

const tiposMsgs = messages.map((message)=>{
    const status = message.split(' ')[0];
    const formatedStatus = status.replace('[','').replace(']','');
    return formatedStatus;
})
 
console.log(tiposMsgs);