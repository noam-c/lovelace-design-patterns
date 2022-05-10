import Token from './Token';
import {isDigit, isSpace} from './StringUtils';

// Represents the state that a tokenizer is in, which determines
// how the next input will be processed.
abstract class TokenizeState {
    protected tokens: Token[];
    constructor(tokens: Token[]) {
        this.tokens = tokens;
    }

    public abstract process(c: string): TokenizeState;

    public end(): void {
    }
};

// The state we're in when we're just starting parsing, or we're between tokens
class EmptyState extends TokenizeState {
    public process(c: string): TokenizeState {
        if (isDigit(c)) {
            let nextState = new NumberState(this.tokens);
            return nextState.process(c);
        } else if (c === '"') {
            return new StringState(this.tokens);
        } else if (!isSpace(c)) {
            let nextState = new WordState(this.tokens);
            return nextState.process(c);
        }

        return this;
    }
}

// State representing being in the middle of a quoted string
class StringState extends TokenizeState {
    private buffer: string;

    public constructor(tokens: Token[]) {
        super(tokens);
        this.buffer = '';
    }

    public process(c: string): TokenizeState {
        // Keep going until we hit an end quote character
        // At that point, the string is done and we're back to empty state

        if (c === '"') {
            this.tokens.push(new Token(`"${this.buffer}"`, "STRING"));
            return new EmptyState(this.tokens);
        }

        this.buffer += c;
        return this;
    }

    public end(): void {
        // Can't end in the middle of a string -- that means we're missing an
        // ending quote!
        throw new Error(`Unfinished string literal: ${this.buffer}`);
    }
}

// State representing parsing a number
class NumberState extends TokenizeState {
    private buffer: string;

    public constructor(tokens: Token[]) {
        super(tokens);
        this.buffer = '';
    }

    public process(c: string): TokenizeState {
        if (isDigit(c)) {
            // We found more number -- keep going
            this.buffer += c;
            return this;
        } else if (isSpace(c)) {
            // A space ends the number -- back to empty state
            this.end();
            let nextState = new EmptyState(this.tokens);
            return nextState.process(c);
        } else {
            // Anything else doesn't make sense in a number
            throw new Error(`Malformed number: Started with '${this.buffer}' and encountered '${c}'`)
        }
    }

    public end(): void {
        // If we're done, then the number is done
        this.tokens.push(new Token(this.buffer, "NUMBER"));
    }
};

// State representing being inside a word
class WordState extends TokenizeState {
    private buffer: string;

    public constructor(tokens: Token[]) {
        super(tokens);
        this.buffer = '';
    }

    public process(c: string): TokenizeState {
        if (isSpace(c)) {
            // Any kind of space ends the word
            this.end();
            let nextState = new EmptyState(this.tokens);
            return nextState.process(c);
        }

        // Any non-space character is a continuation of the word
        this.buffer += c;
        return this;
    }

    public end(): void {
        // End of the input means end of the word
        this.tokens.push(new Token(this.buffer, "WORD"));
    }
};

// A pretty clean parser using the State pattern!
export default function tokenize(text: string): Token[] {
    let tokens: Token[] = [];
    let currentState = new EmptyState(tokens);

    // transition through states until we hit the end of the string or an error
    for (let i = 0; i < text.length; ++i) {
        currentState = currentState.process(text[i]);
    }

    // Wrap up the last token if one exists
    currentState.end();

    return tokens;
}