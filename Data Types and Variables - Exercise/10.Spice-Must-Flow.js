function spiceMustFlow(num) {
    let total = 0;
    let days = 0;
    while(num >= 100) {
        total += num - 26;
        num -= 10;
        days++;
    }
    total -= 26;
    if(total < 0) {
        total = 0;
    }
    console.log(days);
    console.log(total);
}
spiceMustFlow(111);