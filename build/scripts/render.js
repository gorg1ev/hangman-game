import { changeFlag, getFlag } from './language.js';
import { newGame } from './newGame.js';
import renderENG from './render/renderENG.js';
import renderMKD from './render/renderMKD.js';
import { Language } from './types.js';
export default function render() {
    changeFlag();
    newGame();
    const flag = getFlag();
    if (flag === Language.ENG) {
        renderENG();
        return;
    }
    renderMKD();
}
