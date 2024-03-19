import { gameState } from '../../state.js';
function modalMKD() {
    if (gameState.result() === 'win')
        return `<div class="modal">
      <div class="content">
        <img src="./images/giphy-happy.gif" alt="gif" />
        <h4 class="win">Победа</h4>
        <p>Точниот збор е: <b>${gameState.word}</b></p>
        <button class="play-again" onclick="">Играј Повторно</button>
      </div>
    </div>`;
    if (gameState.result() === 'lose') {
        return `<div class="modal">
    <div class="content">
    <img src="./images/giphy-sad.gif" alt="gif" />
    <h4 class="lose">Изгуби</h4>
    <p>Точниот збор е: <b>${gameState.word}</b></p>
    <button class="play-again">Играј Повторно</button>
    </div>
    </div>`;
    }
}
export default modalMKD;
