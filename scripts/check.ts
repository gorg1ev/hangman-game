import { checkLetter } from './checkLetter.js';
import { disableButton } from './renders/disableButton.js';
import { renderMan } from './renders/renderMan.js';
import { renderModal } from './renders/renderModal.js';
import { updateGameState } from './state.js';
import { GameState } from './types.js';

export function check(letter: string, gameState: GameState): void {
  if (
    gameState.letters.indexOf(letter) >= 0 ||
    gameState.attemps <= 0 ||
    gameState.wordLen <= 0
  )
    return;

  const lettersFound = checkLetter(letter);
  updateGameState(lettersFound, letter);
  disableButton(letter, gameState.language);
  renderMan(gameState.attemps);
  renderModal(gameState.language);
}
