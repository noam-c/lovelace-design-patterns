// Checks if a character is a digit
export function isDigit(c: string) {
    return c.length === 1 && c >= '0' && c <= '9';
}

// Checks if the character is some kind of empty space between tokens.
export function isSpace(c: string) {
    return c === '\t' || c === ' ' || c === '\n';
}
