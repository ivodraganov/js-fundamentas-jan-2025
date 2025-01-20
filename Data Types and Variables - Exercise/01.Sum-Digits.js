function sumDigits(num) {
    let number = num.toString();
    let result = 0;
    for(let character of number) {
        result += Number(character);
    }
    console.log(result);
}
sumDigits(245678);