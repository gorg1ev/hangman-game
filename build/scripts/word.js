import getWordList from './wordList.js';
function getRandomWord() {
    const wordList = getWordList();
    const randomNumber = Math.round(Math.random() * wordList.length); // random num from 0 to list length
    const word = wordList[randomNumber]; // getting random word
    if (word === undefined)
        return '';
    console.log(word);
    return word;
}
export { getRandomWord };
