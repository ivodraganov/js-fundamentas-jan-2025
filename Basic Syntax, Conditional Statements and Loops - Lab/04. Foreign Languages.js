function language(input) {
    switch(input) {
        case 'USA':
        case 'England':
            console.log('English');
        break;
        case 'Argentina':
        case 'Mexico':
        case 'Spain':
            console.log('Spanish');
        break;
        default:
            console.log('unknown');
        break;
    }
}
language("Mexico")