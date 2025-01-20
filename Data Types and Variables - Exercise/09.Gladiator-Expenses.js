function gladiatorExpenses(lostFights, helmPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shiedBreaks = 0;
    for(let currLostFight = 1; currLostFight <= lostFights; currLostFight++) {
        if(currLostFight % 2 === 0) {
            expenses += helmPrice;
        }
        if(currLostFight % 3 === 0) {
            expenses += swordPrice;
        }
        if(currLostFight % 2 === 0 && currLostFight % 3 === 0) {
            expenses += shieldPrice;
            shiedBreaks++;
        }
        if(shiedBreaks % 2 === 0 && shiedBreaks !== 0) {
            expenses += armorPrice;
            shiedBreaks = 0;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
