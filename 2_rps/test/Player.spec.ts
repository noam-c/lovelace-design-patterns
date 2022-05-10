import * as mocha from 'mocha';
import * as sinon from 'sinon';
import { Move } from '../Move';
import { expect } from 'chai';
import Player from '../player';
import GameController from '../GameController';

describe('Player', () => {
    it('Should return the choice received from the UI', () => {
        // Arrange
        let player = new Player();
        let game = new GameController();
        sinon.stub(game, 'requestPlayerMove').returns(Move.ROCK);
        sinon.stub(game, 'reportPlayerChoice');

        // Act
        let result = player.getMove(game);

        // Assert
        expect(result).to.equal(Move.ROCK);
    });
});