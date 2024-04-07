const flip = (d, a) => {
    if (d === 'R') {
        return a.sort((x, y) => x - y);
    } else if (d === 'L') {
        return a.sort((x, y) => y - x);
    }
};
console.log(flip('R', [3, 2, 1, 2]));
console.log(flip('L', [1, 4, 5, 3, 5]));
