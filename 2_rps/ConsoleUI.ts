import GameObserver from "./GameObserver";
import { Move } from "./Move";

export default class ConsoleUI implements GameObserver {
    public notifyMove(actorName: string, move: Move) {
        console.log(`${actorName} chose ${move}`);
    }

    public notifyPlayerWin() {
        console.log('You win');
    }

    public notifyCpuWin() {
        console.log('You lose');
    }

    public notifyTie() {
        console.log("It's a tie");
    }
}