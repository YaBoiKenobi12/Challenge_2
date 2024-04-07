function shortcut(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';

    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (!vowels.includes(char)) {
            result += char;
        }
    }
    return result;
}
console.log(shortcut("Hola a todo el mundo"));
console.log(shortcut("Intento numero dos"));
