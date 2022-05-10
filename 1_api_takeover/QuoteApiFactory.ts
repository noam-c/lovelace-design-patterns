import Dadaptor from './Dadaptor';
import IQuoteApi from './IQuoteApi';

export default class QuoteApiFactory {
    public static makeQuoteApi(): IQuoteApi {
        return new Dadaptor();
    }
};