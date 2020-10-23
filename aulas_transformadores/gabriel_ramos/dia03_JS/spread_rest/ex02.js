/*
2) Como aplicar Rest para receber qualquer quantidade de parâmetro na função abaixo?

 const funcao = (a, b) => {
     console.log(a);
     console.log(b);
 };

*/

const funcao = (...args) => {
    args.forEach(arg => {
        console.log(arg);
    })
};

funcao(1, 2, 3, 4, 5, 6)
