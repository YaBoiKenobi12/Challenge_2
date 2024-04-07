function well(x) {
    const goodIdeas = x.filter(idea => idea === 'good').length;
    if (goodIdeas === 0) {
        return 'Fail!';
    } else if (goodIdeas <= 2) {
        return 'Publish!';
    } else {
        return 'I smell a series!';
    }
}
console.log(well(['good', 'bad', 'good']));
console.log(well(['bad', 'bad', 'bad']));
console.log(well(['good', 'good', 'good', 'good']));