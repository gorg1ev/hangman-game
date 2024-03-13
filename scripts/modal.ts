export function renderModal(type: boolean, word: string): void {
  let modalHTML: string;

  if (type) {
    modalHTML = `<div class="modal">
      <div class="content">
        <img src="./images/giphy-happy.gif" alt="gif" />
        <h4 class="win">Победа</h4>
        <p>Точниот збор е: <b>${word}</b></p>
        <button class="play-again" onclick="">Играј Повторно</button>
      </div>
    </div>`;
  } else {
    modalHTML = `<div class="modal">
      <div class="content">
        <img src="./images/giphy-sad.gif" alt="gif" />
        <h4 class="lose">Изгуби</h4>
        <p>Точниот збор е: <b>${word}</b></p>
        <button class="play-again">Играј Повторно</button>
      </div>
    </div>`;
  }

  document.body.insertAdjacentHTML('afterbegin', modalHTML);
}
