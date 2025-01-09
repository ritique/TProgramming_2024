import { Logger } from "./logger";

export class Hero {
    private health: number;
    private strength: number;
    private name: string;
    private classType: string;
    protected isCharmed: boolean = false;
    private iceArrowsUsed: number = 0;
    private iceArrowsEffect: { target: Hero | null; duration: number } = { target: null, duration: 0 };

    constructor(health: number, strength: number, name: string, classType: string) {
        this.health = health;
        this.strength = strength;
        this.name = name;
        this.classType = classType;
    }

    public getHealth(): number {
        return this.health;
    }

    public setHealth(health: number): void {
        this.health = health;
    }

    public getStrength(): number {
        return this.strength;
    }

    public getName(): string {
        return this.name;
    }

    public getClassType(): string {
        return this.classType;
    }

    public attack(enemy: Hero): void {
        let damage = this.strength;

        if (enemy.iceArrowsEffect.target === this && enemy.iceArrowsEffect.duration > 0) {
            damage *= 2;
            Logger.logAttack(this, enemy, damage, true);
        } else {
            Logger.logAttack(this, enemy, damage);
        }

        enemy.setHealth(enemy.getHealth() - damage);
    }

    public useAbility(enemy: Hero): void {

    }

    public useIceArrows(enemy: Hero): void {
        if (this.iceArrowsUsed < (this.classType === 'Archer' ? 2 : 1)) {
            this.iceArrowsUsed++;

            if (enemy.iceArrowsEffect.target === this) {
                enemy.iceArrowsEffect.duration += 2;
            } else {
                enemy.iceArrowsEffect = { target: this, duration: 2 };
            }

            Logger.logIceArrows(this, enemy, enemy.iceArrowsEffect.duration);
        } else {
            Logger.logIceArrowsLimit(this);
        }
    }

    public canUseIceArrows(): boolean {
        return this.iceArrowsUsed < (this.classType === 'Archer' ? 2 : 1);
    }

    public isAlive(): boolean {
        return this.health > 0;
    }

    public updateEffects(): void {
        if (this.iceArrowsEffect.duration > 0) {
            this.iceArrowsEffect.duration--;
            if (this.iceArrowsEffect.duration === 0) {
                this.iceArrowsEffect.target = null;
            }
            Logger.logEffectUpdate(this, 'Ледяные стрелы', this.iceArrowsEffect.duration);
        }
    }

    public resetAbilities(): void {
        this.iceArrowsUsed = 0;
    }
}