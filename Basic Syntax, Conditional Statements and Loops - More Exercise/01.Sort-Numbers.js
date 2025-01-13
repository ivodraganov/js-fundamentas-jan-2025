function sortNumbers(...arr) {
    let result = arr.sort((a,b) => b - a).join('\n');
    console.log(result);
}
sortNumbers(1, 3, 6);