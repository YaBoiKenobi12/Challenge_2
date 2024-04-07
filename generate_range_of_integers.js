function generateRange(min, max, step) {
    let result = [];
    for (let i = min; i <= max; i += step) {
        result.push(i);
    }
    return result;
}
console.log(generateRange(1, 10, 1));
console.log(generateRange(-10, 1, 1)); 
console.log(generateRange(1, 15, 20));
