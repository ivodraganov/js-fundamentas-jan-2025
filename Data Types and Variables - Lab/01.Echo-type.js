function echoType(arr) {
    if(typeof arr === 'undefined') {
        console.log('Parameter is not suitable for printing');
    }
    else if(arr === null || arr === 'null') {
        console.log('object' + '\n' + 'Parameter is not suitable for printing')
    }
    else {
        console.log(typeof(arr) + "\n" + arr);
    }
}
echoType('null')