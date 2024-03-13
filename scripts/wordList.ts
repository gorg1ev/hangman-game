import { getFlag } from './language.js';
import wordListMKD from './wordList/wordListMKD.js';
import wordListENG from './wordList/wordListENG.js';
import { Language } from './types.js';

function getWordList() {
  const flag = getFlag();

  if (flag === Language.ENG) {
    return wordListENG;
  }

  return wordListMKD;
}

export default getWordList;
