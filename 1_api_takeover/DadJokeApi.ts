import axios from 'axios';
import Joke from './Joke';

const options = {
    headers: {
        'User-Agent': 'curl/7.71.1',
        Accept: 'application/json',
    },
};

export default class DadJokeApi {
    public async retrieveJoke(): Promise<Joke> {
        return await axios.get('https://icanhazdadjoke.com', options)
            .then(({data}) => new Joke(data.joke));
    }
};