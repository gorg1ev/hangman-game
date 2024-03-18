import { replaceBlank } from './views/renderWord.js';
import { renderModal } from './views/renderModal.js';
import { renderMan } from './views/renderMan.js';
import { gameState } from './state.js';
import { disableButton } from './views/disableButton.js';

export function checkLetter(letter: string) {
  let found = false;

  if (
    gameState.letters.indexOf(letter) >= 0 ||
    gameState.attemps <= 0 ||
    gameState.wordLen <= 0
  )
    return;

  for (let i = 1; i < gameState.word.length - 1; i++) {
    if (letter === gameState.word[i]) {
      replaceBlank(i, letter);
      found = true;
      gameState.wordLen--;
      gameState.letters.push(letter);
    }
  }

  if (gameState.result() === 'win') {
    gameState.win++;
  }

  if (!found) {
    gameState.attemps--;
    gameState.letters.push(letter);
  } else {
    found = !found;
  }

  if (gameState.result() === 'lose') {
    gameState.lose++;
  }

  disableButton(letter);
  renderMan();
  renderModal();
}
