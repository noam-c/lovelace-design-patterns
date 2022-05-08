import {readFileSync} from 'fs';
import tokenize from './Tokenize';

const data = readFileSync('./input.txt', 'utf8');
console.log(tokenize(data).map(token => token.toString()).join());