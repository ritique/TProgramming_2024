import { Hero } from "../game/hero";
import { Logger } from "../game/logger";

export class Archer extends Hero {
    private fireArrowsUsed: boolean = false;
    private fireArrowsActive: boolean = false;

    constructor(health: number, strength: number, name: string) {
        super(health, strength, name, 'Archer');
    }

    public useAbility(enemy: Hero): void {
        if (this.canUseIceArrows() && Math.random() < 0.5) {
            this.useIceArrows(enemy);
        } else if (!this.fireArrowsUsed) {
            this.fireArrowsActive = true;
            this.fireArrowsUsed = true;
            Logger.logFireArrows(this, enemy);
        } else {
            this.attack(enemy);
        }
    }

    public attack(enemy: Hero): void {
        let damage = this.getStrength();

        if (this.fireArrowsActive) {
            damage += 2;
        }

        enemy.setHealth(enemy.getHealth() - damage);
        Logger.logAttack(this, enemy, damage);
    }

    public resetAbilities(): void {
        super.resetAbilities();
        this.fireArrowsActive = false;
        this.fireArrowsUsed = false;
    }
}