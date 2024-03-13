import { replaceBlank } from './word';
import { renderModal } from './modal';
import { updateStats } from './stats';
import './selectors';
keyboardEl === null || keyboardEl === void 0 ? void 0 : keyboardEl.addEventListener('click', (e) => {
    var _a;
    const btn = (_a = e.target) === null || _a === void 0 ? void 0 : _a.closest('button');
    if (btn === null)
        return;
    let found = false;
    for (let i = 1; i < word.length - 1; i++) {
        if (btn.value === word[i]) {
            replaceBlank(i, btn.value);
            found = true;
            wordLen--;
        }
    }
    if (wordLen === 0) {
        renderModal(true, word);
        playAgain(document.querySelector('.play-again'));
        updateStats('WIN');
    }
    if (!found) {
        attemps--;
        hangmanImg.src = `./images/hangman-${6 - attemps}.svg`;
    }
    else {
        found = !found;
    }
    btn.disabled = true;
    if (attemps === 0) {
        renderModal(false, word);
        playAgain(document.querySelector('.play-again'));
        updateStats('LOSE');
    }
});
