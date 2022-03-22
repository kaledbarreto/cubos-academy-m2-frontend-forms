const formulario = document.querySelector('form');
const senha = document.querySelector('#senha');
const repitaSenha = document.querySelector('#repitaSenha');

formulario.addEventListener('submit', function (event) {
  if (senha.value !== repitaSenha.value) {
    event.preventDefault();
  }
});