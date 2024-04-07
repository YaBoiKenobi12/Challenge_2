function highAndLow(numbers) {
    const nums = numbers.split(" ");
    for (let i = 0; i < nums.length; i++) {
        nums[i] = +nums[i];
    }
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    return `${max} ${min}`;
}
console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5")); 
console.log(highAndLow("1 9 3 4 -5"));