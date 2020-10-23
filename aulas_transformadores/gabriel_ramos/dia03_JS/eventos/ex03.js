/*
  3) Vamos criar uma validação para esse formulário! Crie um objeto chamado validacoes que 
  deverá conter como chave os tipos dos campos que criamos anteriormente (text, email e password). 
  Para cada uma dessas chaves, conterá como valor um array onde conterá algumas funções de validação
  já pre-estabelecidas, criadas abaixo. Após isso crie uma função validaFormulario que receberá um 
  parâmetro campos. Esse parâmetro deverá ser um array contendo cada um dos campos do formulário criado.

*/

//funções pré-estabelecidas
const validaQuantidade = (input, minimo = 6) => {
    const ehValido = input.value.trim().length >= minimo;

    if (!ehValido) {
        return `O campo ${input.name} deve conter no mínimo ${minimo} caracteres`;
    }else{
        return input.value;
    }
}

const validaEmail = (input) => {
    const regexp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;
    const ehValido = regexp.test(input.value);

    if (!ehValido) {
        return `O campo ${input.name} não é válido`;
    }else{
        return input.value;
    }
}

//criar objeto validações, com as keys com campos dos inputs e chaves, as funcções de validação
const validacoes = {
    text: [validaQuantidade],
    email: [validaQuantidade, validaEmail],
    password: [validaQuantidade]
};

/*
  crie a função de validação
  ela deverá, para cada campo do objeto inputs, executar suas devidas validações 
  e mostrar no console as validações após sua execução
*/
const validaFormulario = (inputs) => {
    const aposValidacao = inputs.map(input => {
       const funcoesDeValidacao = validacoes[input.type];
       const validados = funcoesDeValidacao
        .map(funcao => funcao(input))
        .filter(value => value);

       return validados;
    });

    console.log(aposValidacao);
};

// chamada da função que não deverá exibir erro
validaFormulario([
    {
        type: 'text',
        name: 'usuario',
        value: 'gabrieluizramos'
    },
    {
        type: 'password',
        name: 'senha',
        value: '123456'
    },
    {
        type: 'email',
        name: 'email',
        value: 'abc@1234.com.br'
    }
]);

//chamada da função que deverá exibir erro em password e email
validaFormulario([
    {
        type: 'text',
        name: 'usuario',
        value: 'gabrieluizramos'
    },
    {
        type: 'password',
        name: 'senha',
        value: '1234'
    },
    {
        type: 'email',
        name: 'email',
        value: 'abc@1234'
    }
]);


