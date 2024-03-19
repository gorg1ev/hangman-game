import { wordListEl } from '../selectors.js';

let lettersLi: string[] = [];

export function renderWord(word: string): void {
  lettersLi = [];

  lettersLi.push(`<li class="guessed">${word[0]}</li>`);
  for (let i = 1; i < word.length - 1; i++) lettersLi.push('<li></li>');

  lettersLi.push(`<li class="guessed">${word[word.length - 1]}</li>`);

  wordListEl.innerHTML = lettersLi.join('');
}

export function replaceBlank(i: number, letter: string): void {
  lettersLi[i] = `<li class="guessed">${letter}</li>`;
  if (wordListEl === null) return;

  wordListEl.innerHTML = lettersLi.join('');
}
