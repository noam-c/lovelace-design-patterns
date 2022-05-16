import GameController from "./GameController";
import { Move } from "./Move";

export default interface ICpuPlayer {
    getMove(game: GameController): Move;
};