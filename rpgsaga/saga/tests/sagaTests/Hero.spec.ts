import { Hero } from "../../src/game/hero";

describe('Hero', () => {
    let hero: Hero;

    beforeEach(() => {
        hero = new Hero(100, 10, 'TestHero', 'TestClass');
    });

    test('should initialize with correct values', () => {
        expect(hero.getHealth()).toBe(100);
        expect(hero.getStrength()).toBe(10);
        expect(hero.getName()).toBe('TestHero');
        expect(hero.getClassType()).toBe('TestClass');
    });

    test('should reduce health when attacked', () => {
        const enemy = new Hero(100, 10, 'Enemy', 'EnemyClass');
        hero.attack(enemy);
        expect(enemy.getHealth()).toBe(90);
    });

    test('should return true if hero is alive', () => {
        expect(hero.isAlive()).toBe(true);
    });

    test('should return false if hero is dead', () => {
        hero.setHealth(0);
        expect(hero.isAlive()).toBe(false);
    });
});