# The Inspiring Quotes CLI

A command-line utility that outputs an inspiring quote sourced from a public API.

Using the adaptor pattern, we can substitute anything we want in place of inspiring quotes. And as it so happens, there is a public API for Dad jokes too...

## Project Instructions
1. Create a new Adaptor class that implements the `IQuoteApi` interface.
2. In this class, construct a `DadJokeApi`.
3. Implement the `IQuoteApi` interface's `getQuote` function.
4. Call the `DadJokeApi` to get a `Joke`, then convert the `Joke` into a `Quote` and return it.
5. Update the `QuoteApiFactory` to use your Adaptor instead of the `ZenQuotesApi`.
6. Build and run the code! It should output Dad jokes instead of motivational quotes. Much better!

## Further Tweaks
* You can integrate other public APIs that provide quotes, jokes, or fun animal facts.
* You can construct a *Proxy* object that implements `IQuoteApi` and randomly chooses between different kinds of `IQuoteApi` implementations.