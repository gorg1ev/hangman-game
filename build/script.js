import { flagBtn, keyboardEl } from './scripts/selectors.js';
import { gameState } from './scripts/state.js';
import render from './scripts/render.js';
import { checkLetter } from './scripts/checkLetter.js';
import { engLetters } from './scripts/views/keyboardLanguage/ENG.js';
import { mkdLetters } from './scripts/views/keyboardLanguage/MKD.js';
render();
flagBtn === null || flagBtn === void 0 ? void 0 : flagBtn.addEventListener('click', () => {
    if (gameState.language === 'MKD') {
        gameState.language = 'ENG';
    }
    else {
        gameState.language = 'MKD';
    }
    render();
});
keyboardEl === null || keyboardEl === void 0 ? void 0 : keyboardEl.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (btn === null)
        return;
    checkLetter(btn.value);
});
document.addEventListener('keydown', (e) => {
    let keyboard = mkdLetters;
    const letter = e.key.toLowerCase();
    if (gameState.language === 'ENG')
        keyboard = engLetters;
    if (keyboard.indexOf(letter) >= 0) {
        checkLetter(letter);
    }
});
