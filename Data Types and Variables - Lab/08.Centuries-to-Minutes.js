function centuriesToMinutes(centurie) {
    let years = centurie * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = 24 * days;
    let mins = 60 * hours;
    console.log(`${centurie} centuries = ${years} ` + `years = ${days} ` + `days = ${hours} ` + `hours = ${mins} minutes`);
}
centuriesToMinutes(1);