import { Rabbit } from "../../src/labs/diffanimals/rabbit";

describe('Animal class methods tests', () => {
    it('constructor test', () => {
        let newRabbit = new Rabbit("TestRabbit", 6, "male", 8, "Natasha");
        expect(newRabbit.name).toBe('TestRabbit');
        expect(newRabbit.sex).toBe('male');
        expect(newRabbit.owner).toBe('Natasha');
        expect(newRabbit.age).toEqual(6);
        expect(newRabbit.weight).toEqual(8);
    });
    describe('Get methods tests', () => {
        let newRabbit = new Rabbit("TestRabbit", 6, "male", 8, "Natasha");
        it('Name get test', () => {
        expect(newRabbit.name).toBe('TestRabbit');
        });
        it('Sex get test', () => {
            expect(newRabbit.sex).toBe('male');
        });
        it('Owner get test', () => {
        expect(newRabbit.owner).toBe('Natasha');
        });
        it('Age get test', () => {
        expect(newRabbit.age).toEqual(6);
        });
        it('Weight get test', () => {
        expect(newRabbit.weight).toEqual(8);
        });
    });

    describe('Set methods tests', () => {
        let newRabbit = new Rabbit("TestRabbit", 6, "male", 8, "Natasha");
        it('Name test', () => {
            newRabbit.name = 'Snowball';
            expect(newRabbit.name).toBe('Snowball');
        });
        it('Age test', () => {
            newRabbit.age = 8;
            expect(newRabbit.age).toEqual(8);
        });
        it('Negative age test', () => {
            expect(() => {
            newRabbit.age = -1;
            }).toThrow(Error('Invalid age'));
        });
        it('Sex test', () => {
            newRabbit.sex = 'Female';
            expect(newRabbit.sex).toBe('female');
        });
        it('Incorrect sex test', () => {
            expect(() => {
            newRabbit.sex = 'helicopter';
            }).toThrow(Error('Incorrect sex type'))
        });
        it('Weight test', () => {
            newRabbit.weight = 7;
            expect(newRabbit.weight).toEqual(7);
        });
        it('Incorrect weight test', () => {
            expect(() => {
            newRabbit.weight = -1;
            }).toThrow(Error('Invalid weight'));
        });
        it('Owner test', () => {
            newRabbit.owner = 'Natasha';
            expect(newRabbit.owner).toBe('Natasha');
        });
    });

    describe('Other methods tests', () => {
        let newRabbit = new Rabbit("TestRabbit", 6, "male", 8, "Natasha");
        it('Should retirn name, sex and owner', () => {
            expect(newRabbit.toString()).toEqual(`${newRabbit.name} ${newRabbit.sex} ${newRabbit.owner}`);
        });
        it('Should return age as number', () => {
            expect(newRabbit.toNumber()).toEqual(newRabbit.age);
        });
        it('Should return all properties', () => {
            expect(newRabbit.description()).toEqual(
                `Name: ${newRabbit.name}\nSex: ${newRabbit.sex}\nAge: ${newRabbit.age}\nOwner: ${newRabbit.owner}\nWeight: ${newRabbit.weight}`);
        });
        it('should return feature', () => {
            expect(newRabbit.feature()).toEqual(`the rabbit's name is ${newRabbit.name} and its owner is ${newRabbit.owner}`);
        });
    });
});