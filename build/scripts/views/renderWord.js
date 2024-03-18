import { wordListEl } from '../selectors.js';
import { gameState } from '../state.js';
let lettersLi = [];
export function renderWord() {
    lettersLi = [];
    lettersLi.push(`<li class="guessed">${gameState.word[0]}</li>`);
    for (let i = 1; i < gameState.word.length - 1; i++)
        lettersLi.push('<li></li>');
    lettersLi.push(`<li class="guessed">${gameState.word[gameState.word.length - 1]}</li>`);
    wordListEl.innerHTML = lettersLi.join('');
}
export function replaceBlank(i, letter) {
    lettersLi[i] = `<li class="guessed">${letter}</li>`;
    if (wordListEl === null)
        return;
    wordListEl.innerHTML = lettersLi.join('');
}
