import { gameState } from '../../state.js';
function modalENG() {
    if (gameState.result() === 'win') {
        return `<div class="modal">
      <div class="content">
        <img src="./images/giphy-happy.gif" alt="gif" />
        <h4 class="win">You Win</h4>
        <p>Correct word is е: <b>${gameState.word}</b></p>
        <button class="play-again" onclick="">Play Again</button>
      </div>
    </div>`;
    }
    if (gameState.result() === 'lose') {
        return `<div class="modal">
    <div class="content">
    <img src="./images/giphy-sad.gif" alt="gif" />
    <h4 class="lose">You Lose</h4>
    <p>Correct word is е: <b>${gameState.word}</b></p>
    <button class="play-again">Play Again</button>
    </div>
    </div>`;
    }
}
export default modalENG;
