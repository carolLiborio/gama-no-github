/*
2) Como podemos abstrair o seguinte código para aplicar DRY de forma coerente?

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = [8, 9, 10, 11];

const novoArr1 = arr1.map(function (valor) {
    return valor + 1;
});

const novoArr2 = arr2.map(function (valor) {
    return valor + 2;
});

const novoArr3 = arr3.map(function (valor) {
    return valor + 3;
});

console.log('Array inicial', arr1);
console.log('Array novo', novoArr1);
console.log('Array inicial', arr2);
console.log('Array novo', novoArr2);
console.log('Array inicial', arr3);
console.log('Array novo', novoArr3);

*/

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arr3 = [8, 9, 10, 11];


const somaArray = (array, somatoria) => array.map((valor) => valor + somatoria);

const novoArr1 = somaArray(array, 1);
const novoArr2 = somaArray(array, 2);
const novoArr3 = somaArray(array, 3);

const exibeArrays = (array, novoArray) => {
    console.log('Array inicial', array);
    console.log('Array novo', novoArray);
};


exibeArrays(arr1, novoArr1);
exibeArrays(arr2, novoArr2);
exibeArrays(arr3, novoArr3);








