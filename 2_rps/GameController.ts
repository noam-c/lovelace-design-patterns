import * as PromptSync from 'prompt-sync';
import ICpuPlayer from './ICpuPlayer';
import GameObserver from './GameObserver';
import { Move, whatBeats } from './Move';
import Player from './player';

// The GameController class is a Singleton that houses the game logic and
// interacts with the player.
export default class GameController {
    // Helper that gets console input from the player for their next move
    private playerPrompt: PromptSync.Prompt;

    private player: Player;
    private cpu: ICpuPlayer;

    private observers: GameObserver[];

    // Constructor is private so only one GameController can be made
    // and only using the getInstance() function above.
    public constructor(cpu: ICpuPlayer) {
        this.playerPrompt = PromptSync({sigint: true});

        this.player = new Player();
        this.cpu = cpu;

        this.observers = [];
    }

    public registerObserver(observer: GameObserver) {
        this.observers.push(observer);
    }

    // Runs the game
    public run(): void {
        while (true) {
            const playerMove = this.player.getMove(this);
            const cpuMove = this.cpu.getMove(this);

            this.observers.forEach(o => o.notifyMove('Player', playerMove));
            this.observers.forEach(o => o.notifyMove('CPU', cpuMove));

            if (cpuMove === whatBeats(playerMove)) {
                this.observers.forEach(o => o.notifyCpuWin());
            } else if (playerMove === whatBeats(cpuMove)) {
                this.observers.forEach(o => o.notifyPlayerWin());
            } else {
                this.observers.forEach(o => o.notifyTie());
            }
        }
    }

    // Gets the player's move
    public requestPlayerMove(): Move {
        while (true) {
            let input = this.playerPrompt('Input your move [R, P, S]: ');        
            if (input === 'R') {
                return Move.ROCK;
            } else if (input === 'P') {
                return Move.PAPER;
            } else if (input === 'S') {
                return Move.SCISSORS;
            } else {
                console.log('Invalid move');
            }
        }
    }
};