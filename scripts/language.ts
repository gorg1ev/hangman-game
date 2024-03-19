import { Languages } from './types.js';
import { engLetters } from './renders/keyboardLanguage/ENG.js';
import { mkdLetters } from './renders/keyboardLanguage/MKD.js';
import wordListENG from './wordList/wordListENG.js';
import wordListMKD from './wordList/wordListMKD.js';

function getWordList(language: Languages): string[] {
  if (language === 'ENG') return wordListENG;

  return wordListMKD as string[];
}

export function getLetters(language: Languages): string {
  if (language === 'ENG') return engLetters;

  return mkdLetters;
}

export function getRandomWord(language: Languages): string {
  const wordList = getWordList(language);

  const randomNumber = Math.round(Math.random() * wordList.length); // random num from 0 to list length
  const word = wordList[randomNumber]; // getting random word

  if (word === undefined) return '';

  console.log(word);

  return word;
}
