import getWordList from './wordList.js';
const wordListEl = document.querySelector('#word');
let lettersLi;
function getRandomWord() {
    lettersLi = [];
    const wordList = getWordList();
    const randomNumber = Math.round(Math.random() * wordList.length); // random num from 0 to list length
    const word = wordList[randomNumber]; // getting random word
    lettersLi.push(`<li class="guessed">${word[0]}</li>`);
    for (let i = 1; i < word.length - 1; i++)
        lettersLi.push('<li></li>');
    lettersLi.push(`<li class="guessed">${word[word.length - 1]}</li>`);
    if (wordListEl === null)
        return '';
    wordListEl.innerHTML = lettersLi.join('');
    console.log(word);
    return word;
}
function replaceBlank(i, letter) {
    lettersLi[i] = `<li class="guessed">${letter}</li>`;
    if (wordListEl === null)
        return;
    wordListEl.innerHTML = lettersLi.join('');
}
export { getRandomWord, replaceBlank };
