import { checkLetter } from './checkLetter.js';
import { disableButton } from './renders/disableButton.js';
import { renderMan } from './renders/renderMan.js';
import { renderModal } from './renders/renderModal.js';
import { updateGameState } from './state.js';
export function check(state) {
    if (state.letters.indexOf(state.letter) >= 0 ||
        state.attemps <= 0 ||
        state.wordLen <= 0)
        return;
    const lettersFound = checkLetter(state.letter);
    updateGameState(lettersFound, state.letter);
    disableButton(state.letter, state.language);
    renderMan(state.attemps);
    renderModal(state.language);
}
