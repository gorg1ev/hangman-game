import render from './render.js';
import { newGame } from './state.js';
import { gameState } from './state.js';
import { renderEngKeyboard } from './views/keyboardLanguage/ENG.js';
import { renderMkdKeyboard } from './views/keyboardLanguage/MKD.js';
import { renderMan } from './views/renderMan.js';
import { renderWord } from './views/renderWord.js';

export default function playAgain() {
  const playAgainBtn = document.querySelector(
    '.play-again'
  ) as HTMLButtonElement;

  playAgainBtn.addEventListener('click', () => {
    document.body.removeChild(document.querySelector('.modal') as HTMLElement);

    if (gameState.language === 'ENG') renderEngKeyboard();
    else if (gameState.language === 'MKD') renderMkdKeyboard();

    render();
  });
}
