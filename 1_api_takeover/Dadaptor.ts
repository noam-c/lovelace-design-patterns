import DadJokeApi from './DadJokeApi';
import IQuoteApi from './IQuoteApi';
import Joke from './Joke';
import Quote from './Quote';

// An Adaptor that converts DadJokeApi into a quotes API
export default class Dadaptor implements IQuoteApi {
    private dadJokeApi: DadJokeApi;

    public constructor() {
        this.dadJokeApi = new DadJokeApi();
    }

    // Get a Joke and convert it into a Quote
    async getQuote(): Promise<Quote> {
        const joke = await this.dadJokeApi.retrieveJoke();
        return new Quote(joke.joke, 'Anonymous Dad');
    }
};