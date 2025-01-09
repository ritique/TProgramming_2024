import { Hero } from "../../src/game/hero";
import { Wizard } from "../../src/classes/Wizard";

describe('Wizard', () => {
    let wizard: Wizard;
    let enemy: Hero;

    beforeEach(() => {
        wizard = new Wizard(100, 10, 'Gandalf');
        enemy = new Hero(100, 10, 'Enemy', 'EnemyClass');
    });

    test('should use Charm correctly', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0.6);

        wizard.useAbility(enemy);
        expect(wizard['isCharmed']).toBe(true);
    });

    test('should skip turn when charmed', () => {
        wizard['isCharmed'] = true;

        wizard.attack(enemy);
        expect(enemy.getHealth()).toBe(100);
    });

    test('should use Ice Arrows if random value is less than 0.5', () => {
        jest.spyOn(Math, 'random').mockReturnValue(0.4);

        wizard.useAbility(enemy);
        expect(enemy['iceArrowsEffect'].duration).toBe(2);
    });
});