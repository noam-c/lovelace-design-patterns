import * as PromptSync from 'prompt-sync';
import ICpuPlayer from './ICpuPlayer';
import { Move, whatBeats } from './Move';
import Player from './player';

// The GameController class is a Singleton that houses the game logic and
// interacts with the player.
export default class GameController {
    // Helper that gets console input from the player for their next move
    private playerPrompt: PromptSync.Prompt;

    private player: Player;
    private cpu: ICpuPlayer;

    // Constructor is private so only one GameController can be made
    // and only using the getInstance() function above.
    public constructor(cpu: ICpuPlayer) {
        this.playerPrompt = PromptSync({sigint: true});

        this.player = new Player();
        this.cpu = cpu;
    }

    // Runs the game
    public run(): void {
        while (true) {
            const playerMove = this.player.getMove(this);
            const cpuMove = this.cpu.getMove(this);

            if (cpuMove === whatBeats(playerMove)) {
                console.log('You lose');
            } else if (playerMove === whatBeats(cpuMove)) {
                console.log('You win');
            } else {
                console.log("It's a tie");
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

    // Confirms the player's move to the player
    public reportPlayerChoice(move: Move): void {
        console.log(`Player chose ${move}`)
    }

    // Reports the CPU's move to the player
    public reportCpuChoice(move: Move): void {
        console.log(`CPU chose ${move}`)
    }
};