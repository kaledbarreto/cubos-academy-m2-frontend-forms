const formulario = document.querySelector('form');
const genero = document.querySelector('#generoMusical');
const hide = document.querySelector('#hideInput');

const arrPop = ['Bad Habits', 'Leave the Door Open', 'Begin'];
const arrRock = ['We Will Rock You', 'Its Only Rock N Roll (But I Like It)', 'My Generation'];
const arrEletronica = ['Alive (It Feels Like)', 'Head and Heart', 'Paradise'];

formulario.addEventListener('submit', function (event) {
  i = Math.floor(Math.random() * arrPop.length);
  console.log(genero.value);
  if (genero.value === "Pop") {
    hide.value = arrPop[i];
  } else if (genero.value === "Rock") {
    hide.value = arrRock[i];
  } else {
    hide.value = arrEletronica[i];
  }


});