import RandomCpu from './randomCpu';
import GameController from './GameController';

let game = new GameController(new RandomCpu());
game.run();