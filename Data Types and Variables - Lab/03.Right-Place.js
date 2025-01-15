function rightPlace(str, char, result) {
    let ress = str.replace("_",char);
    let output = ress === result ? "Matched" : "Not Matched.";
    console.log(output);
}
