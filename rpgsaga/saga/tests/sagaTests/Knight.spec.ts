import { Hero } from "../../src/game/hero";
import { Knight } from "../../src/classes/Knight";

describe('Knight', () => {
    let knight: Knight;
    let enemy: Hero;

    beforeEach(() => {
        knight = new Knight(100, 10, 'Sir Knight');
        enemy = new Hero(100, 10, 'Enemy', 'EnemyClass');
    });

    test('should use Retribution Strike correctly', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0.6);

        knight.useAbility(enemy);
        expect(enemy.getHealth()).toBe(87);
    });

    test('should use Ice Arrows if random value is less than 0.5', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0.4);

        knight.useAbility(enemy);
        expect(enemy['iceArrowsEffect'].duration).toBe(2);
    });
});