import { flagBtn, keyboardEl } from './scripts/selectors.js';
import { gameState } from './scripts/state.js';
import render from './scripts/render.js';
import { checkLetter } from './scripts/checkLetter.js';
import { engLetters } from './scripts/views/keyboardLanguage/ENG.js';
import { mkdLetters } from './scripts/views/keyboardLanguage/MKD.js';

render();

flagBtn?.addEventListener('click', () => {
  if (gameState.language === 'MKD') {
    gameState.language = 'ENG';
  } else {
    gameState.language = 'MKD';
  }

  render();
});

keyboardEl?.addEventListener('click', (e: Event) => {
  const btn = (e.target as HTMLButtonElement).closest('button');

  if (btn === null) return;

  checkLetter(btn.value);
});

document.addEventListener('keydown', (e) => {
  let keyboard = mkdLetters;
  const letter = e.key.toLowerCase();

  if (gameState.language === 'ENG') keyboard = engLetters;

  if (keyboard.indexOf(letter) >= 0) {
    checkLetter(letter);
  }
});
