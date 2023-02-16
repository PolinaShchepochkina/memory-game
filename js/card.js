export function createGameCard(defaultIcon, flippedCard) {
  const card = document.createElement('div');
  card.classList.add('game__card');

  const notFlippedCardI = document.createElement('i');
  const flippedCardI = document.createElement('i');

  notFlippedCardI.classList.add('fa', `fa-${defaultIcon}`);
  flippedCardI.classList.add('fa', `fa-${flippedCard}`);

  card.append(flippedCardI, notFlippedCardI);

  return card;
}
