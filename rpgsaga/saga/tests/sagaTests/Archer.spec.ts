import { Hero } from "../../src/game/hero";
import { Archer } from "../../src/classes/Archer";

describe('Archer', () => {
    let archer: Archer;
    let enemy: Hero;

    beforeEach(() => {
        archer = new Archer(100, 10, 'Legolas');
        enemy = new Hero(100, 10, 'Enemy', 'EnemyClass');
    });

    test('should use Fire Arrows correctly', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0.6);

        archer.useAbility(enemy);
        expect(archer['fireArrowsUsed']).toBe(true);
    });

    test('should add extra damage when Fire Arrows are active', () => {
        archer['fireArrowsActive'] = true;

        archer.attack(enemy);
        expect(enemy.getHealth()).toBe(88);
    });

    test('should use Ice Arrows if random value is less than 0.5', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0.4);

        archer.useAbility(enemy);
        expect(enemy['iceArrowsEffect'].duration).toBe(2);
    });
});