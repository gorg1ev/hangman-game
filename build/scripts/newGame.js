import { getRandomWord } from './word.js';
let word = {
    value: '',
    wordLen: 0,
    attemps: 0,
};
function newGame() {
    word.value = getRandomWord();
    word.wordLen = word.value.length - 2;
    word.attemps = 6;
}
export { newGame, word };
