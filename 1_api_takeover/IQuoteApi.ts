import Quote from './Quote';

export default interface IQuoteApi {
    getQuote: () => Promise<Quote>;
};