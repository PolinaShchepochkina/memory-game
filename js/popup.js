export function createPopup(message, buttonText, onButtonClick) {
  const popup = document.createElement('section');
  popup.classList.add('popup');
  const content = document.createElement('div');
  content.classList.add('popup__content');
  const messageElement = document.createElement('h3');
  messageElement.textContent = message;
  const button = document.createElement('button');
  button.classList.add('popup__button');
  button.textContent = buttonText;

  button.addEventListener('click', () => {
    popup.remove();
    onButtonClick();
  });

  content.append(messageElement, button);
  popup.append(content);
  document.body.append(popup);
};
