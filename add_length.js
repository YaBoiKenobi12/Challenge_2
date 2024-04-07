function addLength(str) {
    const words = str.split(" ");
    const result = words.map(word => `${word} ${word.length}`);
    return result;
}
console.log(addLength("destruccion helado"));
console.log(addLength("esta es toda una frase sin sentido"));
