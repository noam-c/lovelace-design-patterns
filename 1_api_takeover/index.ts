/// <reference types="node" />
import * as minimist from 'minimist';
import IQuoteApi from './IQuoteApi';
import Quote from './quote';
import QuoteApiFactory from './QuoteApiFactory';

const args = minimist(process.argv.slice(1));
const numQuotes = args['n'] || 1;
const quoteApi: IQuoteApi = QuoteApiFactory.makeQuoteApi();

let promises = [];
for (let i = 0; i < numQuotes; i++) {
    promises.push(quoteApi.getQuote());
}

Promise.all(promises).then((quotes: Quote[]) => {
    quotes.forEach(quote => {
        console.log(`"${quote.text}"`);
        console.log(`\t-- ${quote.attribution}`);
    });
}).catch(err => {
    console.log("Failed to get quotes. Sorry -- this just isn't your day!");
    console.log(err);
});