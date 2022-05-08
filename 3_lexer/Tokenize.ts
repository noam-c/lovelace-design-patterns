import Token from './Token';
import {isDigit, isSpace} from './StringUtils';

// A truly messy parser. Let's make it better using the State pattern!
export default function tokenize(text: string): Token[] {
    let tokens: Token[] = [];
    let currentTokenText = '';

    // Boolean flags to indicate state. If there were only *one* maybe it
    // wouldn't be so bad. But if we have more than one, we have code spaghetti.
    let numberMode = false;
    let wordMode = false;
    for (let i = 0; i < text.length; ++i) {
        let c = text[i];
        if (isDigit(c) && !numberMode && !wordMode) {
            // we're making a number now
            currentTokenText += c;
            numberMode = true;
        } else if (isDigit(c) && numberMode) {
            // continuing a number
            currentTokenText += c;
        } else if (isSpace(c) && numberMode) {
            // ending a number
            tokens.push(new Token(currentTokenText, 'NUMBER'));
            currentTokenText = '';
            numberMode = false;
        } else if (!isDigit(c) && numberMode) {
            // error state: numbers can't have letters in them!
            throw new Error(`Malformed number: Started with '${currentTokenText}' and encountered '${c}'`)
        } else if (!isSpace(c) && !wordMode) {
            // we're making a word now
            currentTokenText += c;
            wordMode = true;
        } else if (!isSpace(c) && wordMode) {
            // continuing a word
            currentTokenText += c;
        } else if (isSpace(c) && wordMode) {
            // ending a word
            tokens.push(new Token(currentTokenText, 'WORD'));
            currentTokenText = '';
            wordMode = false;
        }
    }

    if (numberMode) {
        // ending a number
        tokens.push(new Token(currentTokenText, 'NUMBER'));
    } else if (wordMode) {
        // ending a word
        tokens.push(new Token(currentTokenText, 'WORD'));
    }

    return tokens;
}