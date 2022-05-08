// The available moves in a game of RPS
export enum Move {
    ROCK = 'Rock',
    PAPER = 'Paper',
    SCISSORS = 'Scissors',
};

// Given a move, returns the move that wins against it
export function whatBeats(move: Move): Move {
    switch (move) {
        case Move.ROCK:
            return Move.PAPER;
        case Move.PAPER:
            return Move.SCISSORS;
        case Move.SCISSORS:
            return Move.ROCK;
    }
}