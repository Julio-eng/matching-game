import CardGame from "../../components/CardGame";
import "./style.css";

function BoardGame(amount) {
    const $htmlCardGame = CardGame();
    const $BoardGame = $htmlCardGame.repeat(amount);

    return /*html*/ `
        <section class="board-game">
            ${$BoardGame}
        </section>
    `;
}

export default BoardGame;

