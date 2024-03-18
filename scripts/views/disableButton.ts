import { keyboardEl } from '../selectors.js';
import { gameState } from '../state.js';
import { engLetters } from './keyboardLanguage/ENG.js';
import { mkdLetters } from './keyboardLanguage/MKD.js';

export function disableButton(letter: string) {
  const btns = keyboardEl.querySelectorAll('button');
  let keyboard = mkdLetters;

  if (gameState.language === 'ENG') keyboard = engLetters;

  const index = keyboard.indexOf(letter);
  btns[index].disabled = true;
}
