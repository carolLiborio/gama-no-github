/*

2) Utilizando Fetch, faça uma chamada para a API 
https://jsonplaceholder.typicode.com/users e liste 
todos os usuários no console.

Realizando as tratativas para caso de erro;
Depois, adapte o código para utilizar Async/Await.

*/

const url = 'https://jsonplaceholder.typicode.com/users';

//Promise Thenable
fetch(url)
.then(response => response.json())
.then(console.log);

//Async Await
async function main(){
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}

main();