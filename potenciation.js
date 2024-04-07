function power(x, y) {
    if (y === 0) {
        return 1;
    } else {
        let result = 1;
        for (let i = 0; i < y; i++) {
            result *= x;
        }
        return result;
    }
}

console.log(power(2, 3));
console.log(power(5, 0));