import { Dog } from "../../src/labs/diffanimals/dog";

describe('Animal class methods tests', () => {
    it('constructor test', () => {
        let newDog = new Dog("TestDog", 12, "male", 20, "Alex");
        expect(newDog.name).toBe('TestDog');
        expect(newDog.sex).toBe('male');
        expect(newDog.owner).toBe('Alex');
        expect(newDog.age).toEqual(12);
        expect(newDog.weight).toEqual(20);
    });
    describe('Get methods tests', () => {
        let newDog = new Dog("TestDog", 12, "male", 20, "Alex");
        it('Name get test', () => {
        expect(newDog.name).toBe('TestDog');
        });
        it('Sex get test', () => {
            expect(newDog.sex).toBe('male');
        });
        it('Owner get test', () => {
        expect(newDog.owner).toBe('Alex');
        });
        it('Age get test', () => {
        expect(newDog.age).toEqual(12);
        });
        it('Weight get test', () => {
        expect(newDog.weight).toEqual(20);
        });
    });

    describe('Set methods tests', () => {
        let newDog = new Dog("TestDog", 12, "male", 20, "Alex");
        it('Name test', () => {
            newDog.name = 'Snowball';
            expect(newDog.name).toBe('Snowball');
        });
        it('Age test', () => {
            newDog.age = 12;
            expect(newDog.age).toEqual(12);
        });
        it('Negative age test', () => {
            expect(() => {
            newDog.age = -1;
            }).toThrow(Error('Invalid age'));
        });
        it('Sex test', () => {
            newDog.sex = 'Female';
            expect(newDog.sex).toBe('female');
        });
        it('Incorrect sex test', () => {
            expect(() => {
            newDog.sex = 'helicopter';
            }).toThrow(Error('Incorrect sex type'))
        });
        it('Weight test', () => {
            newDog.weight = 20;
            expect(newDog.weight).toEqual(20);
        });
        it('Incorrect weight test', () => {
            expect(() => {
            newDog.weight = -1;
            }).toThrow(Error('Invalid weight'));
        });
        it('Owner test', () => {
            newDog.owner = 'Alex';
            expect(newDog.owner).toBe('Alex');
        });
    });

    describe('Other methods tests', () => {
        let newDog = new Dog("TestDog", 12, "male", 20, "Alex");
        it('Should retirn name, sex and owner', () => {
            expect(newDog.toString()).toEqual(`${newDog.name} ${newDog.sex} ${newDog.owner}`);
        });
        it('Should return age as number', () => {
            expect(newDog.toNumber()).toEqual(newDog.age);
        });
        it('Should return all properties', () => {
            expect(newDog.description()).toEqual(
                `Name: ${newDog.name}\nSex: ${newDog.sex}\nAge: ${newDog.age}\nOwner: ${newDog.owner}\nWeight: ${newDog.weight}`);
        });
        it('should return feature', () => {
            expect(newDog.feature()).toEqual(`the dog's name is ${newDog.name} and its owner is ${newDog.owner}`);
        });
    });
});