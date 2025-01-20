function convertDistance(num) {
    let meters = Number(num);
    let kilometers = meters / 1000;
    let miles = kilometers * 0.6213712;
    console.log(`${meters} meters is equal to ${kilometers} kilometers. \n${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`);
}
convertDistance(1852)