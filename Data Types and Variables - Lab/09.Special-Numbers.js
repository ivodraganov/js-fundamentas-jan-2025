function specialNumbers(num){
    let result = '';
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        sum = i % 10 + parseInt(i / 10);
        result = sum === 5 || sum === 7 || sum === 11;
        console.log(result ? `${i} -> True` : `${i} -> False`);
    }
}
specialNumbers(15)