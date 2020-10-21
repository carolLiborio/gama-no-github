/*
Dado o seguinte objeto:

const pessoa = {
    nome: 'Gabriel',
    gatos: [
        'Lora',
        'Logan',
        'LeBeau',
        'Qual será o próximo?'
    ]
};
2) Troque a string Qual será o próximo pra Chega,
 já tá bom né;

*/

const pessoa = {
    nome: 'Gabriel',
    gatos: [
        'Lora',
        'Logan',
        'LeBeau',
        'Qual será o próximo?'
    ]
};

pessoa.gatos[pessoa.gatos.length - 1] = 'Chega, já tá bom né';
console.log(pessoa);
