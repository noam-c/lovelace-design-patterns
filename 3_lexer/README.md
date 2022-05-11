# The Lexer

A command-line utility that [lexes](https://en.wikipedia.org/wiki/Lexical_analysis), or tokenizes the text in `input.txt`, and outputs the tokens that it created.

The `tokenize` loop is quite messy, and needs to be cleaned up. This is a great opportunity to experiment with the State Design Pattern.

## Further Tweaks
* You can tweak the `NumberState` to add support for fractional numbers (e.g. `123.45`)
* You can make a `CURRENCY` type token, that starts with a currency character like `$` and continues with a sequence of numbers (e.g. `$123` should yield `CURRENCY<$123>` in the output)