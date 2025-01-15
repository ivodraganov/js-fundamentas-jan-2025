function requiredReading(pages, pagesForOneHour, mustRead) {
    let result = (pages / pagesForOneHour) / mustRead;
    console.log(result);
}
requiredReading(212,20,2);