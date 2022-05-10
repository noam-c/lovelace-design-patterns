import * as mocha from 'mocha';
import EasyCpu from '../EasyCpu';
import { Move } from '../Move';
import { expect } from 'chai';
import GameController from '../GameController';

describe('EasyCpu', () => {
    it('Should pick Rock', () => {
        // Arrange
        let cpu = new EasyCpu();
        let game = new GameController();

        // Act
        let result = cpu.getMove(game);

        // Assert
        expect(result).to.equal(Move.ROCK);
    });
});