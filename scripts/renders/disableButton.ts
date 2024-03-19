import { getLetters } from '../language.js';
import { keyboardEl } from '../selectors.js';
import { Languages } from '../types.js';

export function disableButton(letter: string, language: Languages): void {
  const btns = keyboardEl.querySelectorAll('button');
  const keyboard = getLetters(language);

  const index = keyboard.indexOf(letter);
  btns[index].disabled = true;
}
