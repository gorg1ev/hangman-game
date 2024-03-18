import { newGame } from './state.js';
import { renderMan } from './views/renderMan.js';
import { renderWord } from './views/renderWord.js';
import { renderStats } from './views/renderStats.js';
import { renderLanguage } from './language.js';
export default function render() {
    renderLanguage();
    newGame();
    renderWord();
    renderMan();
    renderStats();
}
