import IQuoteApi from './IQuoteApi';
import ZenQuotesApi from './ZenQuotesApi';

export default class QuoteApiFactory {
    public static makeQuoteApi(): IQuoteApi {
        return new ZenQuotesApi();
    }
};