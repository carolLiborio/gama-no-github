/*
2) Como adaptar a função abaixo para receber um callback 
que será executado com o resultado da operação ao invés de fazer um alert?

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