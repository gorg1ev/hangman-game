import { replaceBlank } from './views/renderWord.js';
import { renderModal } from './views/renderModal.js';
import { renderMan } from './views/renderMan.js';
import { gameState } from './state.js';
import { disableButton } from './views/disableButton.js';
function keyboardEventFn(e) {
    var _a;
    const btn = (_a = e.target) === null || _a === void 0 ? void 0 : _a.closest('button');
    if (btn === null)
        return;
    let found = false;
    for (let i = 1; i < gameState.word.length - 1; i++) {
        if (btn.value === gameState.word[i]) {
            replaceBlank(i, btn.value);
            found = true;
            gameState.wordLen--;
        }
    }
    if (gameState.result() === 'win') {
        gameState.win++;
    }
    if (!found) {
        gameState.attemps--;
    }
    else {
        found = !found;
    }
    if (gameState.result() === 'lose') {
        gameState.lose++;
    }
    disableButton(btn);
    renderMan();
    renderModal();
}
export { keyboardEventFn };
