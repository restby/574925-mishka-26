let navigationMenu = document.querySelector('.navigation__container');
let navigationButton = document.querySelector('.navigation__toggle');
let navigationBtnIconOpen = navigationButton.querySelector('.navigation__toggle-icon--open');
let navigationBtnIconClose = navigationButton.querySelector('.navigation__toggle-icon--close');

console.log(navigationMenu);
console.log(navigationButton);
console.log(navigationBtnIconOpen);
console.log(navigationBtnIconClose);

navigationButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  navigationMenu.classList.toggle('navigation__container--open');
  navigationBtnIconOpen.classList.toggle('navigation__toggle-icon--hide');
  navigationBtnIconClose.classList.toggle('navigation__toggle-icon--hide');
});
