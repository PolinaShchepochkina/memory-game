import { createGameCard } from './card.js';
import { createGameMenu } from './menu.js';
import { createPopup } from './popup.js';
import { createCardsIconsArray, duplicateArray, shuffle } from './utils.js';
import { confetti } from './confetti.js';

export function startGame(cardsNumber) {
  let firstCard = null;
  let secondCard = null;
  let clickable = true;
  let time = 60;
  let timerId = null;

  const gameSection = document.querySelector('.game');
  gameSection.innerHTML = '';
  const gameBoard = document.createElement('div');
  gameBoard.classList.add('game__board');

  const restartButton = document.createElement('button');
  restartButton.classList.add('game__back-button');
  restartButton.textContent = 'Сыграть ещё раз';
  restartButton.addEventListener('click', () => {
    clearInterval(timerId);
    startGame(cardsNumber);
  });

  const returnToMenuButton = document.createElement('button');
  returnToMenuButton.classList.add('game__back-button');
  returnToMenuButton.textContent = 'К выбору сложности';
  returnToMenuButton.addEventListener('click', () => {
    clearInterval(timerId);
    createGameMenu();
  });

  const timer = document.createElement('div');
  timer.classList.add('game__timer');
  timer.textContent = `Осталось времени: ${time} секунд`;

  const cardsIcons = createCardsIconsArray(cardsNumber);
  const duplicatedCardsIcons = duplicateArray(cardsIcons);
  shuffle(duplicatedCardsIcons);

  duplicatedCardsIcons.forEach(icon => {
    gameBoard.append(createGameCard('question', icon))
  });

  gameSection.append(
    gameBoard,
    timer,
    restartButton,
    returnToMenuButton
  );

  const cards = document.querySelectorAll('.game__card');

  cards.forEach((card, index) => card.addEventListener('click', () => {
    if (clickable == true && !card.classList.contains('success')) {

      timerId = setInterval(() => {
        time -= 1;
        timer.textContent = `Осталось времени: ${time} секунд`;

        if (time === 0) {
          clearInterval(timerId);
          createPopup('Время вышло!', 'В главное меню', createGameMenu);
        }
      }, 1000);

      card.classList.add('flipped');

      if (firstCard == null) {
        firstCard = index;
      } else {
        if (index != firstCard) {
          secondCard = index;
          clickable = false;
        }
      }

      if (firstCard != null && secondCard != null && firstCard != secondCard) {
        if (
          cards[firstCard].firstElementChild.className === cards[secondCard].firstElementChild.className
        ) {
          setTimeout(() => {
            cards[firstCard].classList.add('success');
            cards[secondCard].classList.add('success');
            firstCard = null;
            secondCard = null;
            clickable = true;
            if (cards.length === document.querySelectorAll('.success').length) {
              clearInterval(timerId);
              document.querySelector('.confetti').innerHTML = confetti;
              createPopup('Вы выиграли!', 'В главное меню', createGameMenu);
            }
          }, 400);
        } else {
          setTimeout(() => {
            cards[firstCard].classList.remove('flipped');
            cards[secondCard].classList.remove('flipped');
            firstCard = null;
            secondCard = null;

            clickable = true;
          }, 400);
        }
      }
    }
  }));
};
