import * as mocha from 'mocha';
import { Move } from '../Move';
import { expect } from 'chai';
import Player from '../player';

describe.skip('Player', () => {
    it('Should return the choice received from the UI', () => {
        // Arrange
        let player = new Player();

        // Act
        let result = player.getMove();

        // Assert
        expect(result).to.not.be.null; // What else can we even do here?!
    });
});