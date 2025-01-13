function rounding(a, b) {
    let first = Number(a);
    let second = Number(b);
    if (second > 15) {
        second = 15;
    }
    console.log(parseFloat(first.toFixed(second)));
}
rounding(10.5,3)