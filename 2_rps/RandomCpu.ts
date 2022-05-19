import GameController from "./GameController";
import ICpuPlayer from "./ICpuPlayer";
import { Move } from "./Move";

// An AI that just picks a move at random, with uniform distribution
export default class RandomCpu implements ICpuPlayer {
    getMove(game: GameController): Move {
        const moves = Object.values(Move);
        const randomIndex = Math.floor(Math.random() * moves.length);
        return moves[randomIndex];
    }
};