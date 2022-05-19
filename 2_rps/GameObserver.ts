import { Move } from "./Move";

export default abstract class GameObserver {
    public notifyMove(actorName: string, move: Move): void {}
    public notifyPlayerWin(): void {}
    public notifyCpuWin(): void {}
    public notifyTie(): void {}
};