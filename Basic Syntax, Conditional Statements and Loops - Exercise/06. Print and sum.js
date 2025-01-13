function printAndSum(a,b) {
    let sum = 0;
    let numbers = '';
    for (let i = a; i <= b; i++) {
        sum += i;
        numbers += i + " ";
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}
printAndSum(1,26)