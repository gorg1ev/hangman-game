import wordListMKD from './wordList/wordListMKD.js';
import wordListENG from './wordList/wordListENG.js';
import { gameState } from './state.js';
function getWordList() {
    if (gameState.language === 'ENG') {
        return wordListENG;
    }
    return wordListMKD;
}
export default getWordList;
