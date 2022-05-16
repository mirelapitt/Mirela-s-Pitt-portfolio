const mbar = document.getElementById('pop');
const closem = document.querySelector('.close');
const mPopup = document.querySelector('.menu-up-container');

mbar.addEventListener('click', () => {
  mPopup.classList.add('pop-up');
});

closem.addEventListener('click', () => {
  mPopup.classList.remove('pop-up');
});

mPopup.addEventListener('click', () => {
  mPopup.classList.remove('pop-up');
});