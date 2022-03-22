const formulario = document.querySelector('form');
const senha = document.querySelector('#senha');
const confirmarSenha = document.querySelector('#confirmar-senha');

formulario.addEventListener('submit', function (event) {
  if (senha.value !== confirmarSenha.value) {
    event.preventDefault();
  }
});