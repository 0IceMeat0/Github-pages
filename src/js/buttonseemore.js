const text = document.querySelector('.about__text');
const ButtonSeeMoreText = document.querySelector('.about-button');
const ButtonSeeMore1text = document.querySelector(".about-button__text");
const buttonSeeMoreAbout__img = document.querySelector('.about-button__img');

ButtonSeeMoreText.addEventListener('click', function () {
  if(text.classList.contains('about123')) {
    text.classList.remove('about123');
    ButtonSeeMore1text.textContent = 'Читать далее';
    buttonSeeMoreAbout__img.classList.remove('brands-button__img--rotate');
  } else {
    text.classList.add('about123');
    ButtonSeeMore1text.textContent = 'Скрыть';
    buttonSeeMoreAbout__img.classList.add('brands-button__img--rotate');
  }
});

const buttonSeeMoreRep = document.querySelector(".brand-button--repair");
const cardsRep = document.querySelector('.cards--repair');
const buttonSeeMoreRep__text = document.querySelector('.brand-button__text');
const buttonSeeMore__img1 = document.querySelector('.brand-button__img');

buttonSeeMoreRep.addEventListener('click', function () {
  if (cardsRep.classList.contains('cards--height-content')) {
    cardsRep.classList.remove('cards--height-content')
    buttonSeeMoreRep__text.textContent = 'Показать все';
    buttonSeeMore__img1.classList.remove('brands-button__img--rotate');
  } else {
    cardsRep.classList.add('cards--height-content')
    buttonSeeMoreRep__text.textContent = 'Скрыть';
    buttonSeeMore__img1.classList.add('brands-button__img--rotate');
  }
});
const buttonSeeMore = document.querySelector(".brands-button");
const cards = document.querySelector('.cards');
const buttonSeeMore__text = document.querySelector('.brands-button__text');
const buttonSeeMore__img = document.querySelector('.brands-button__img');

buttonSeeMore.addEventListener('click', function () {
    if (cards.classList.contains('cards--height-content')) {
      cards.classList.remove('cards--height-content')
      buttonSeeMore__text.textContent = 'Показать все';
      buttonSeeMore__img.classList.remove('brands-button__img--rotate');
    } else {
      cards.classList.add('cards--height-content')
      buttonSeeMore__text.textContent = 'Скрыть';
      buttonSeeMore__img.classList.add('brands-button__img--rotate');
    }
  });
