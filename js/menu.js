import { startGame } from './start.js';

export function createGameMenu() {
  const title = document.createElement('h2');
  title.textContent = 'Выбор сложности';
  title.classList.add('game__title');

  const chooseDifficulty = document.querySelector('.game');
  chooseDifficulty.innerHTML = '';
  // document.querySelector('.congrats').innerHTML = '';

  const form = document.createElement('form');
  let input = document.createElement('input');
  const button = document.createElement('button');

  form.classList.add('game__form');
  form.innerText = 'Укажите количество карточек по вертикали/горизонтали';
  input.classList.add('game__form-input');
  input.type = 'text';
  input.placeholder = 'Введите четное число от 2 до 10';
  button.classList.add('game__form-button');
  button.textContent = 'Начать игру';

  button.addEventListener('click', function () {
    let cardsNumber = parseInt(input.value);

    if (cardsNumber % 2 !== 0 || cardsNumber < 2 || cardsNumber > 10) {
      input.value = ''
    } else {
      button.classList.add('active');
      startGame(cardsNumber);
    }
  });

  chooseDifficulty.append(
    title,
    form,
    input,
    button
  )
}
