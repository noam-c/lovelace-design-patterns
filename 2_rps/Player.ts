import {Move} from './Move';
import GameController from './GameController';

// Represents the player who is currently running the game
export default class Player {
    // Get the player's move -- relies on the GameController
    // to handle user interaction details
    public getMove(): Move {
        const nextMove = GameController.getInstance().requestPlayerMove();
        GameController.getInstance().reportPlayerChoice(nextMove);
        return nextMove;
    }
}