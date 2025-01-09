import { Game } from "../../src/game/game";

describe('Game', () => {
    let game: Game;

    beforeEach(() => {
        game = new Game(4);
    });

    test('should initialize with correct number of players', () => {
        expect(game.players.length).toBe(4);
    });

    test('should start the game and determine a winner', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        game.start();
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Победитель:'));
    });
});