function login(arr) {
    let username = arr[0];
    let password = username.split('').reverse().join('');
    let currentTry = 1;
    for(let i = 1; i < arr.length; i++) {
        let guessedPass = arr[i];
        if(guessedPass === password) {
            console.log(`User ${username} logged in.`);
            break;
        }
        if(currentTry === 4) {
            console.log(`User ${username} blocked!`);
            break;
        }
        console.log('Incorrect password. Try again.');
        currentTry++;
    }
}