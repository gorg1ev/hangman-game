import { getRandomWord } from './word.js';
let word = {
    word: '',
    wordLen: 0,
    attemps: 0,
};
function newGame() {
    const word = getRandomWord();
    const wordLen = word.length - 2;
    const attemps = 6;
    console.log(word);
}
