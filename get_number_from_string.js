function getNumberFromString(s) {
    let result = '';
    for (let char of s) {
        if (!isNaN(parseInt(char))) {
            result += char;
        }
    }
    return parseInt(result);
}
console.log(getNumberFromString("Hola 4 todo 3l mund0 grac1as"));
