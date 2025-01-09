import { Hero } from "../../src/game/hero";
import { Logger } from "../../src/game/logger";

describe('Logger', () => {
    let hero1: Hero;
    let hero2: Hero;

    beforeEach(() => {
        hero1 = new Hero(100, 10, 'Hero1', 'Knight');
        hero2 = new Hero(100, 10, 'Hero2', 'Archer');
    });

    test('should log battle correctly', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        Logger.logBattle(hero1, hero2);
        expect(consoleSpy).toHaveBeenCalledWith('Hero1 (Knight) vs Hero2 (Archer)');
    });

    test('should log attack correctly', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        Logger.logAttack(hero1, hero2, 10);
        expect(consoleSpy).toHaveBeenCalledWith('Hero1 (Knight) наносит урон 10 противнику Hero2 (Archer)');
    });

    test('should log death correctly', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        Logger.logDeath(hero1);
        expect(consoleSpy).toHaveBeenCalledWith('Hero1 (Knight) погибает');
    });
});