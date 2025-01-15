function triplesOfLatinLetters(numbers) {
    for(let i = 0; i < numbers; i++) {
        let letter1 = String.fromCharCode(97+i);
        for(let j = 0; j < numbers; j++) {
            let letter2 = String.fromCharCode(97+j);
            for(let y = 0; y < numbers; y++) {
                let letter3 = String.fromCharCode(97+y);
                let result = letter1 + letter2 + letter3;
                console.log(result);
            }
        }
    }
}
triplesOfLatinLetters(2);