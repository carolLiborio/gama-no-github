/*
4) Atribuir ao formulário as funções de validação.

*/
const validaQuantidade = (input, minimo = 6) => {
    const ehValido = input.value.trim().length >= minimo;

    if (!ehValido) {
        return `O campo ${input.name} deve conter no mínimo ${minimo} caracteres`;
    }
}

const validaEmail = (input) => {
    const regexp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    const ehValido = regexp.test(input.value);

    if (!ehValido) {
        return `O campo ${input.name} não é válido`;
    }
}

const validacoes = {
    text: [validaQuantidade],
    email: [validaQuantidade, validaEmail],
    password: [validaQuantidade]
};

const validaFormulario = (inputs) => {
    const aposValidacao = inputs.map(input => {
    const funcoesDeValidacao = validacoes[input.type];
    const validados = funcoesDeValidacao
        .map(funcao => funcao(input))
        .filter(value => value);

    return validados;
    });

    return aposValidacao;
};


const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const campos = [
        cadastro.usuario,
        cadastro.email,
        cadastro.senha
    ];
    
    const validados = validaFormulario(campos);
    console.log(validados);
});