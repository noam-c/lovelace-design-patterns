import GameObserver from "./GameObserver";
import { Move } from "./Move";

export default class Achievements extends GameObserver {
    win5Unlocked: boolean;
    win10Unlocked: boolean;

    numWins: number;

    public constructor() {
        super();

        this.numWins = 0;

        this.win5Unlocked = false;
        this.win10Unlocked = false;
    }

    public notifyPlayerWin() {
        this.numWins++;

        if (!this.win5Unlocked && this.numWins >= 5) {
            console.log('Achievement unlocked!');
            console.log('"Rock and Roll"');
            console.log('Won 5 times');

            this.win5Unlocked = true;
        }

        if (!this.win10Unlocked && this.numWins >= 10) {
            console.log('Achievement unlocked!');
            console.log('"Good On Paper"');
            console.log('Won 10 times');

            this.win10Unlocked = true;
        }
    }
}