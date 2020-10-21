//const URL = 'https://jsonplaceholder.typicode.com/users';
fetch(URL)
.then(response => response.json())
.then(console.log);