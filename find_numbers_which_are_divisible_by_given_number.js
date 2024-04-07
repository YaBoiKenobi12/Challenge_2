function divisibleBy(numbers, divisor) {
    return numbers.filter(number => number % divisor === 0);
}
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
console.log(divisibleBy([10, 20, 30, 40, 50], 10));
console.log(divisibleBy([3, 6, 9, 12, 15], 5));