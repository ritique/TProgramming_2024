export abstract class Animal {
    protected _name: string;
    protected _age: number;
    protected _sex: string;

    constructor(newName: string, newAge: number, newSex: string) {
        this.name = newName;
        this.age = newAge;
        this.sex = newSex;
    }
    
    public set name(newName: string) {
        if (newName.trim().length === 0) {
            throw new Error('Animals name cannot be empty')
        }
        this._name = newName;
    }
    
    public set age(newAge: number) {
        if (newAge > 0 && newAge < 100) {
            this._age = newAge;
        } else {
            throw new Error(`Invalid age`)
        }
    }

    public set sex(nSex: string) {
        const newSex = nSex.toLowerCase();
        if (newSex === 'male' || newSex === 'female') {
            this._sex = newSex;
        } else {
            throw new Error('Incorrect sex type');
        }
    }
    
    public get name(): string {
        return this._name;
    }

    public get age(): number {
        return this._age;
    }

    public get sex(): string {
        return this._sex;
    }

    toString(): string {
        return `${this._name} ${this._sex}`;
    }
    
    toNumber(): number {
        return this._age;
    }
    
    description(): string {
        return `Name: ${this._name}\nSex: ${this._sex}\nAge: ${this._age}`;
    }

    abstract feature(): string;
}