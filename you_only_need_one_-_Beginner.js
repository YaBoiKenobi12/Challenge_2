function check(a, x) {
    return a.includes(x);
}
console.log(check([1, 2, 3, 4, 5], 3));
console.log(check(['manzana', 'patano', 'naranja'], 'manzana'));
console.log(check([1, 2, 3, 4, 5], 6));
