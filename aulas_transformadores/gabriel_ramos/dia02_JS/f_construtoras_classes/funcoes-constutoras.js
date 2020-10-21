/*
const pessoa = {
    nome: 'Gabriel',
    gatos: [
        'Lora',
        'Logan',
        'LeBeau',
    ]
};

*/

function Pessoa (nome, gatos){
    this.nome = nome;
    this.gatos = gatos;
    this.exibeGatos = () =>{
        this.gatos.forEach(gato => {
            console.log(gato)
        });
    }
}

//const pessoa = new Pessoa('Gabriel', ['Lora', 'Logan', 'LeBeau']);
console.log(pessoa.exibeGatos());


/* Crie uma classe que recebe nome e gatos como parâmetro e cria o objeto com a estrutura acima. */

class Pessoa{
    constructor(nome, gatos){
        this.nome = nome;
        this.gatos = gatos;
    }

    exibeGatos(){
        this.gatos.forEach(gato => {
            console.log(gato)
        });
    }
}

const pessoa = new Pessoa('Gabriel', ['Lora', 'Logan', 'LeBeau']);