import { statsEl } from '../selectors.js';
export function renderStats(wins, loses) {
    statsEl[0].innerHTML = wins.toString();
    statsEl[1].innerHTML = loses.toString();
}
