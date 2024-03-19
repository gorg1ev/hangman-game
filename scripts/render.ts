import { gameState, newGame } from './state.js';
import { renderMan } from './renders/renderMan.js';
import { renderWord } from './renders/renderWord.js';
import { renderStats } from './renders/renderStats.js';
import { renderLanguage } from './renders/renderLanguage.js';
import { renderTheme } from './renders/renderTheme.js';

export default function render(): void {
  newGame();
  renderWord(gameState.word);
  renderMan(gameState.attemps);
  renderStats(gameState.wins, gameState.loses);
  renderLanguage(gameState.language);
  renderTheme(gameState.theme);
}
