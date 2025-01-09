import { Hero } from "./hero";

export class Logger {
    static logRound(round: number): void {
        console.log(`Тур ${round}.`);
    }

    static logBattle(player1: Hero, player2: Hero): void {
        console.log(`${player1.getName()} (${player1.getClassType()}) vs ${player2.getName()} (${player2.getClassType()})`);
    }

    static logAttack(attacker: Hero, defender: Hero, damage: number, isDoubled: boolean = false): void {
        if (isDoubled) {
            console.log(`${attacker.getName()} (${attacker.getClassType()}) наносит удвоенный урон ${damage} противнику ${defender.getName()} (${defender.getClassType()}) (эффект Ледяные стрелы)`);
        } else {
            console.log(`${attacker.getName()} (${attacker.getClassType()}) наносит урон ${damage} противнику ${defender.getName()} (${defender.getClassType()})`);
        }
    }
    
    static logRetributionStrike(attacker: Hero, defender: Hero, damage: number): void {
        console.log(`${attacker.getName()} (${attacker.getClassType()}) использует Удар возмездия и наносит урон ${damage} противнику ${defender.getName()} (${defender.getClassType()})`);
    }

    static logIceArrowsLimit(player: Hero): void {
        console.log(`${player.getName()} (${player.getClassType()}) не может использовать Ледяные стрелы: достигнут лимит использований.`);
    }

    static logIceArrows(attacker: Hero, defender: Hero, duration: number): void {
        console.log(`${attacker.getName()} (${attacker.getClassType()}) использует Ледяные стрелы, противник ${defender.getName()} (${defender.getClassType()}) получит удвоенный урон на следующие ${duration} хода`);
    }
    
    static logFireArrows(attacker: Hero, defender: Hero): void {
        console.log(`${attacker.getName()} (${attacker.getClassType()}) использует Огненные стрелы, противник ${defender.getName()} (${defender.getClassType()}) получает +2 к урону до конца тура`);
    }
     
    static logCharm(attacker: Hero, defender: Hero): void {
        console.log(`${attacker.getName()} (${attacker.getClassType()}) использует Заворожение, противник ${defender.getName()} (${defender.getClassType()}) пропускает ход`);
    }
    
    static logSkipTurn(defender: Hero): void {
        console.log(`${defender.getName()} (${defender.getClassType()}) пропускает ход`);
    }
    
    static logEffectUpdate(defender: Hero, effectName: string, remainingDuration: number): void {
        console.log(`${defender.getName()} (${defender.getClassType()}): эффект "${effectName}" остался на ${remainingDuration} хода`);
    }

    static logDeath(player: Hero): void {
        console.log(`${player.getName()} (${player.getClassType()}) погибает`);
    }
    
    static logWinner(winner: Hero): void {
        console.log(`Победитель: ${winner.getName()} (${winner.getClassType()})`);
    }
}