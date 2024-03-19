import { flagBtn, keyboardEl, themeBtn } from './scripts/selectors.js';
import { gameState, changeLanguage, chageTheme } from './scripts/state.js';
import render from './scripts/render.js';
import { getLetters } from './scripts/language.js';
import { renderTheme } from './scripts/renders/renderTheme.js';
import { check } from './scripts/check.js';
render();
flagBtn === null || flagBtn === void 0 ? void 0 : flagBtn.addEventListener('click', () => {
    changeLanguage();
    render();
});
keyboardEl === null || keyboardEl === void 0 ? void 0 : keyboardEl.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (btn === null)
        return;
    const checkValues = {
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
    if (keyboard.indexOf(letter) < 0)
        return;
    const checkValues = {
        letter,
        letters: gameState.letters,
        attemps: gameState.attemps,
        language: gameState.language,
        wordLen: gameState.wordLen,
    };
    check(checkValues);
});
themeBtn === null || themeBtn === void 0 ? void 0 : themeBtn.addEventListener('click', () => {
    chageTheme();
    renderTheme(gameState.theme);
});
