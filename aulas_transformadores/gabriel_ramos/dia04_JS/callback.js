/*1) Em teoria, o que são callbacks?
   RESPOSTA: Callbacks são funções que são passadas 
    a outra função como argumento, que é então invocado dentro da função externa 
    para completar algum tipo de rotina ou ação.

2) Como adaptar a função abaixo para receber um callback 
que será executado com o resultado da operação ao invés de fazer um alert?
/
const computacaoMuitoCustosa = () => {
    const superCalculo = 1 + 2;
    alert(superCaulco)
}

computacaoMuitoCustosa();
*/

const computacaoMuitoCustosa = (a,b, callback) => {
    const superCalculo = a + b;
    callback(superCalculo)
}

computacaoMuitoCustosa(5,6, resultado => console.log('resultado: ' + resultado));