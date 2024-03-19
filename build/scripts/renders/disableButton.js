import { getLetters } from '../language.js';
import { keyboardEl } from '../selectors.js';
export function disableButton(letter, language) {
    const btns = keyboardEl.querySelectorAll('button');
    const keyboard = getLetters(language);
    const index = keyboard.indexOf(letter);
    btns[index].disabled = true;
}
