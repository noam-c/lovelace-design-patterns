import GameController from './GameController';
import ConsoleUI from './ConsoleUI';
import Achievements from './Achievements';
import EasyCpu from './EasyCpu';

let ui = new ConsoleUI();
let achievements = new Achievements();

let game = new GameController(new EasyCpu());
game.registerObserver(ui);
game.registerObserver(achievements);
game.run();