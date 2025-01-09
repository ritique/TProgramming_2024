import { Hero } from "./hero";
import { Logger } from "./logger";
import { RandomName } from "./names";
import { Knight } from "../classes/Knight";
import { Archer } from "../classes/Archer";
import { Wizard } from "../classes/Wizard";

export class Game {
    players: Hero[] = [];
    round: number = 1;

    constructor(playerCount: number) {
        if (playerCount % 2 !== 0) {
            throw new Error("Количество героев должно быть четным.");
        }

        const availableNames = [...RandomName];

        for (let i = 0; i < playerCount; i++) {
            const health = Math.floor(Math.random() * 100) + 50;
            const strength = Math.floor(Math.random() * 20) + 10;
            const nameIndex = Math.floor(Math.random() * availableNames.length);
            const name = availableNames.splice(nameIndex, 1)[0];
            const heroType = Math.floor(Math.random() * 3);

            switch (heroType) {
                case 0:
                    this.players.push(new Knight(health, strength, name));
                    break;
                case 1:
                    this.players.push(new Archer(health, strength, name));
                    break;
                case 2:
                    this.players.push(new Wizard(health, strength, name));
                    break;
            }
        }
    }

    public start(): void {
        while (this.players.length > 1) {
            Logger.logRound(this.round);

            this.players.forEach(player => player.resetAbilities());
            
            this.fight();
            this.round++;
        }
        Logger.logWinner(this.players[0]);
    }

    private fight(): void {
        const shuffledPlayers = this.players.sort(() => Math.random() - 0.5);
        const winners: Hero[] = [];

        for (let i = 0; i < shuffledPlayers.length; i += 2) {
            const player1 = shuffledPlayers[i];
            const player2 = shuffledPlayers[i + 1];

            Logger.logBattle(player1, player2);

            while (player1.isAlive() && player2.isAlive()) {
                if (Math.random() < 0.5) {
                    player1.useAbility(player2);
                } else {
                    player1.attack(player2);
                }

                if (player2.isAlive()) {
                    if (Math.random() < 0.5) {
                        player2.useAbility(player1);
                    } else {
                        player2.attack(player1);
                    }
                }

                player1.updateEffects();
                player2.updateEffects();
            }

            if (player1.isAlive()) {
                winners.push(player1);
            } else {
                winners.push(player2);
            }
            
            if (!player1.isAlive()) {
                Logger.logDeath(player1);
            }
            if (!player2.isAlive()) {
                Logger.logDeath(player2);
            }
        }

        this.players = winners;
    }
}