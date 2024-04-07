function createPhoneNumber(numbers) {
    const firstPart = `(${numbers[0]}${numbers[1]}${numbers[2]}) `;
    const secondPart = `${numbers[3]}${numbers[4]}${numbers[5]}-`;
    const thirdPart = `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
    
    return `${firstPart}${secondPart}${thirdPart}`;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
