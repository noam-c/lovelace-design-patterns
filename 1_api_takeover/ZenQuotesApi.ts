import axios from 'axios';
import IQuoteApi from './IQuoteApi';
import Quote from './Quote';

// Retrieves random quotes from the ZenQuotes API
export default class ZenQuotesApi implements IQuoteApi {
    // Get an inspiring quote
    public async getQuote(): Promise<Quote> {
        return await axios.get('https://zenquotes.io/api/random')
            .then(({data}) => new Quote(data[0].q, data[0].a));
    }
};
