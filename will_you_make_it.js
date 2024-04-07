const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    const maxDistance = fuelLeft * mpg;
    return maxDistance >= distanceToPump;
};
console.log(zeroFuel(50, 25, 2));
