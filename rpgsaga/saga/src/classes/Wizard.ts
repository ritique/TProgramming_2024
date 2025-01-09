import { Hero } from "../game/hero";
import { Logger } from "../game/logger";

export class Wizard extends Hero {
    protected isCharmed: boolean = false;

    constructor(health: number, strength: number, name: string) {
        super(health, strength, name, 'Wizard');
    }

    public useAbility(enemy: Hero): void {
        if (this.canUseIceArrows() && Math.random() < 0.5) {
            this.useIceArrows(enemy); 
        } else {
            this.isCharmed = true;
            Logger.logCharm(this, enemy);
        }
    }

    public attack(enemy: Hero): void {
        if (this.isCharmed) {
            this.isCharmed = false;
            Logger.logSkipTurn(enemy);
        } else {
            super.attack(enemy);
        }
    }
}