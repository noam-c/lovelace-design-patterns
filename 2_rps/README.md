# The Rock-Paper-Scissors CLI

A command-line implementation of Rock, Paper, Scissors. The computer opponent is... predictable.

## Wave 1: Rock, Paper, Dependency Injection!
This app uses a Singleton, which means that there is a lot of tight coupling with a global game instance. This design also makes it impossible to run the `Player` unit test, since the game instance is difficult to mock. We can fix this using dependency injection.

### Wave 1 Instructions
1. Update the `getMove` calls in `EasyCpu` and `Player` to take a `GameController` parameter.
2. Change the `getMove` functions to use the new parameter instead of `GameController.getInstance()`.
3. Update `GameController`'s code to pass `this` into the `getMove` calls.
4. Remove the Singleton code from GameController (`singletonInstance` and `getInstance()`).
5. Change `index.ts` to construct a `new GameController()`.
6. In `Player.spec.ts`, change `describe.skip(...)` to `describe(...)`.
7. In the unit test, create a `GameController`. Use [SinonJS](https://sinonjs.org/) to [stub out](https://sinonjs.org/releases/latest/stubs/) its `requestPlayerMove` and `reportPlayerChoice` functions.
8. Using your stubs, verify that whatever `requestPlayerMove` returns in your stub is also what `player.getMove(game)` returns!
9. Build and run the code! We now have the same game, but with less coupled code, no global variables, and more unit test coverage.

## Wave 2: A New Challenger

The easy CPU is too easy! Use the Strategy pattern to make different CPUs with different difficulty levels. Make a `RandomCpu` that just picks a move at random! Can you defeat it?

## Wave 3: Achievement Unlocked

We'd like to add achievements for winning or losing a certain amount of games. Use the Observer pattern to log Achievements to the console!

## Further Tweaks
* You can modify `Move.ts` to make your own version of Rock, Paper, Scissors with new moves and rules. Dynamite beats Paper!