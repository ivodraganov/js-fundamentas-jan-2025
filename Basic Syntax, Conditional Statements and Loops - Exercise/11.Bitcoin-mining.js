function mining(arr) {
    let totalMoney = 0;
    let firstBitcoinDay = 0;
    let bitcoinCount = 0;
    let currentDay = 1;
    for(let goldQty of arr) {
        if(currentDay % 3 === 0) {
            goldQty *= 0.7;
        }
        let moneyWon = goldQty * 67.51;
        totalMoney += moneyWon;
        while(totalMoney >= 11949.16) {
            bitcoinCount++;
            totalMoney -= 11949.16;
            if(bitcoinCount === 1) {
                firstBitcoinDay = currentDay;
            }
        }
        currentDay++;
    }
    console.log(`Bought bitcoins: ${bitcoinCount}`);
    if(bitcoinCount > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
mining([100, 200, 300]);