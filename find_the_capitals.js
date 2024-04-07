var capitals = function (word) {
    const capitalIndices = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            capitalIndices.push(i);
        }
    }
    return capitalIndices;
};
console.log(capitals("PrOgrAMacIoN"));
