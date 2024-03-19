import playAgain from '../playAgain.js';
import modalENG from './modalLanguage/ENG.js';
import modalMKD from './modalLanguage/MKD.js';
export function renderModal(language) {
    let modalHTML = modalMKD();
    if (language === 'ENG')
        modalHTML = modalENG();
    if (modalHTML === undefined)
        return;
    document.body.insertAdjacentHTML('afterbegin', modalHTML);
    playAgain();
}
