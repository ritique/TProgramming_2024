import { Animal } from "../abstract/animal";

export class Rabbit extends Animal {
    private _weight: number;
    private _owner: string;

    constructor(newName: string, newAge: number, newSex: string, newWeight: number, newOwner: string) {
        super(newName, newAge, newSex);
        this._weight = newWeight;
        this._owner = newOwner;
    }

    public set weight(newWeight) {
        if (newWeight >= 4 && newWeight < 12) {
            this._weight = newWeight;
        } else {
            throw new Error('Invalid weight')
        }
    }

    public set owner(newOwner) {
        if (newOwner.trim().length === 0) {
            throw new Error('Owners name cannot be empty')
        }
    }

    public get weight(): number {
        return this._weight;
    }

    public get owner(): string {
        return this._owner;
    }

    description(): string {
        return `Name: ${this._name}\nSex: ${this._sex}\nAge: ${this._age}\nOwner: ${this._owner}\nWeight: ${this._weight}`;
    }

    public feature(): string {
        return `the rabbit's name is ${this._name} and its owner is ${this._owner}`;
    }

    toString(): string {
        return `${this._name} ${this._sex} ${this._owner}`
    }
}