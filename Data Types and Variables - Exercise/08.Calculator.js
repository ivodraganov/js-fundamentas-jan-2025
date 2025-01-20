function calculator(a, x, b) {
    let firstNum = Number(a);
    let secNum = Number(b);
    let result = 0;
    switch(x) {
        case '+':
           result = a + b;
           break;
        case '-':
            result = a - b;
            break;
        case '/':
            result = a / b;
            break;
        case '*':
            result = a * b;
    }
    console.log(result.toFixed(2));
}
calculator(2,'+',5)