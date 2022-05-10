import GameController from './GameController';
import { Move } from './Move';

// A CPU that's tragically easy to defeat.
export default class EasyCpu {
    getMove(game: GameController): Move {
        // "Good ol' rock. Nothing beats that!" -- Bart Simpson, 1993
        let nextMove = Move.ROCK;
        game.reportCpuChoice(nextMove);
        return nextMove;
    }
}