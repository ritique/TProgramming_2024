import { Hero } from "../game/hero";
import { Logger } from "../game/logger";

export class Knight extends Hero {
    constructor(health: number, strength: number, name: string) {
        super(health, strength, name, 'Knight');
    }

    public useAbility(enemy: Hero): void {
        if (this.canUseIceArrows() && Math.random() < 0.5) {
            this.useIceArrows(enemy);
        } else {
            const damage = Math.round(this.getStrength() * 1.3);
            enemy.setHealth(enemy.getHealth() - damage);
            Logger.logRetributionStrike(this, enemy, damage);
        }
    }
}