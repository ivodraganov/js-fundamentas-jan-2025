function primeNumberChecker(num) {
    let prime = true;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            prime = false;
            break;
        }
    }
    console.log(prime);
}
primeNumberChecker(9)