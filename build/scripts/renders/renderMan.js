import { hangmanImg } from '../selectors.js';
const TOTAL_ATTEMPS = 6;
export function renderMan(attemp) {
    if (TOTAL_ATTEMPS - attemp < 0) {
        console.error(`Maximum attemps are ${TOTAL_ATTEMPS}`);
        return;
    }
    hangmanImg.src = `./images/hangman-${TOTAL_ATTEMPS - attemp}.svg`;
}
