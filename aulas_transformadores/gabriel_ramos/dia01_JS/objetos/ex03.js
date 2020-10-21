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
3) Remova a string Chega, já tá bom né e deixa 
somente os valores restantes no array.
*/

pessoa.gatos.pop();
console.log(pessoa);