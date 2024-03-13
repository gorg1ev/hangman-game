import { keyboardEl, hangmanImg } from './selectors.js';
import { replaceBlank } from './word.js';
import { renderModal } from './modal.js';
import { updateStats } from './stats.js';
import playAgain from './playAgain.js';
import { word } from './newGame.js';
keyboardEl === null || keyboardEl === void 0 ? void 0 : keyboardEl.addEventListener('click', (e) => {
    var _a;
    const btn = (_a = e.target) === null || _a === void 0 ? void 0 : _a.closest('button');
    if (btn === null)
        return;
    let found = false;
    for (let i = 1; i < word.value.length - 1; i++) {
        if (btn.value === word.value[i]) {
            replaceBlank(i, btn.value);
            found = true;
            word.wordLen--;
        }
    }
    if (word.wordLen === 0) {
        renderModal(true, word.value);
        playAgain(document.querySelector('.play-again'));
        updateStats('WIN');
    }
    if (!found) {
        word.attemps--;
        hangmanImg.src = `./images/hangman-${6 - word.attemps}.svg`;
    }
    else {
        found = !found;
    }
    btn.disabled = true;
    if (word.attemps === 0) {
        renderModal(false, word.value);
        playAgain(document.querySelector('.play-again'));
        updateStats('LOSE');
    }
});
