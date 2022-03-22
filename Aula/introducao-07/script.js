const formulaario = document.querySelector('form');
const inputPesquisa = document.querySelector('#pesquisa');

formulaario.addEventListener('submit', function (event) {
  if (!inputPesquisa.value) {
    event.preventDefault(); //Previnir comportamento padrão (ou seja, quando tiver uma pesquisa vazia nada acontece).
  }
});