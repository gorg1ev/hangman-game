import { flagBtn, keyboardEl, themeBtn } from './scripts/selectors.js';
import { gameState, changeLanguage, chageTheme } from './scripts/state.js';
import render from './scripts/render.js';
import { getLetters } from './scripts/language.js';
import { renderTheme } from './scripts/renders/renderTheme.js';
import { check } from './scripts/check.js';

render();

flagBtn?.addEventListener('click', () => {
  changeLanguage();
  render();
});

keyboardEl?.addEventListener('click', (e: Event) => {
  const btn = (e.target as HTMLButtonElement).closest('button');

  if (btn === null) return;

  check(btn.value, gameState);
});

document.addEventListener('keydown', (e) => {
  const letter = e.key.toLowerCase();
  let keyboard = getLetters(gameState.language);

  if (keyboard.indexOf(letter) < 0) return;

  check(letter, gameState);
});

themeBtn?.addEventListener('click', () => {
  chageTheme();
  renderTheme(gameState.theme);
});
