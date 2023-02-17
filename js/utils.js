export function createCardsIconsArray(count) {
  const cardsIcons = [
    'house',
    'ship',
    'anchor',
    'hippo',
    'guitar',
    'plane',
    'key',
    'paw',
    'magnifying-glass',
    'music',
    'envelope',
    'heart',
    'camera-retro',
    'phone',
    'poo',
    'comments',
    'cloud-showers-heavy',
    'cart-shopping',
    'bolt',
    'mug-hot',
    'dog',
    'gift',
    'gear',
    'headphones',
    'thumbs-up',
    'paper-plane',
    'truck',
    'globe',
    'bicycle',
    'snowflake',
    'palette',
    'feather',
    'shirt',
    'mountain-sun',
    'pencil',
    'store',
    'flag-checkered',
    'rocket',
    'cat',
    'icons',
    'leaf',
    'shower',
    'medal',
    'radio',
    'dragon',
    'puzzle-piece',
    'dove',
    'otter',
    'yin-yang',
    'tractor'
  ];

  switch (count) {
    case 2:
      return cardsIcons.slice(0, 2);
    case 4:
      return cardsIcons.slice(0, 8);
    case 6:
      return cardsIcons.slice(0, 18);
    case 8:
      return cardsIcons.slice(0, 32);
    case 10:
      return cardsIcons;
    default:
      break;
  };

  return cardsIcons;
};

export function duplicateArray(array) {
  return array.reduce(function (res, current) {
    return res.concat([current, current]);
  }, []);
};

// Алгоритм перемешивания Фишера — Йетса
export function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // Пока есть элементы для перемешивания
  while (currentIndex != 0) {

    // Взять оставшийся элемент
    randomIndex = Math.floor(Math.random() * currentIndex--);

    // И поменять его местами с текущим элементом
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};
