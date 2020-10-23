/*
2) No formulário já criado, atribua um evento para que, 
ao disparar o formulário, a página não seja recarregada e exiba todos 
os dados informados no console.
*/

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(`Usuário: ${cadastro.usuario.value}`);
    console.log(`Email: ${cadastro.email.value}`);
    console.log(`Senha: ${cadastro.senha.value}`);
})