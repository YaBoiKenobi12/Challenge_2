function flickSwitch(arr) {
    let switchState = true;
    return arr.map(item => {
        if (item === 'flick') {
            switchState = !switchState;
        }
        return switchState;
    });
}
console.log(flickSwitch(['codewars', 'flick', 'code', 'wars']));
console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine']));
console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick'])); 