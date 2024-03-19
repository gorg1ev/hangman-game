import { flagBtn, keyboardEl, themeBtn } from './scripts/selectors.js';
import { gameState, changeLanguage, chageTheme } from './scripts/state.js';
import render from './scripts/render.js';
import { getLetters } from './scripts/language.js';
import { renderTheme } from './scripts/renders/renderTheme.js';
import { CheckValues } from './scripts/types.js';
import { check } from './scripts/check.js';

render();

flagBtn?.addEventListener('click', () => {
  changeLanguage();
  render();
});

keyboardEl?.addEventListener('click', (e: Event) => {
  const btn = (e.target as HTMLButtonElement).closest('button');

  if (btn === null) return;

  const checkValues: CheckValues = {
    letter: btn.value,
    letters: gameState.letters,
    attemps: gameState.attemps,
    language: gameState.language,
    wordLen: gameState.wordLen,
  };

  check(checkValues);
});

document.addEventListener('keydown', (e) => {
  const letter = e.key.toLowerCase();
  let keyboard = getLetters(gameState.language);

  if (keyboard.indexOf(letter) < 0) return;

  const checkValues: CheckValues = {
    letter,
    letters: gameState.letters,
    attemps: gameState.attemps,
    language: gameState.language,
    wordLen: gameState.wordLen,
  };

  check(checkValues);
});

themeBtn?.addEventListener('click', () => {
  chageTheme();
  renderTheme(gameState.theme);
});
