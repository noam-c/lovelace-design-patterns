import * as mocha from 'mocha';
import EasyCpu from '../EasyCpu';
import { Move } from '../Move';
import { expect } from 'chai';

describe('EasyCpu', () => {
    it('Should pick Rock', () => {
        // Arrange
        let cpu = new EasyCpu();

        // Act
        let result = cpu.getMove();

        // Assert
        expect(result).to.equal(Move.ROCK);
    });
});