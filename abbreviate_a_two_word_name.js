function abbrevName(name) {
    const words = name.split(" ");
    const initials = words.map(word => word[0].toUpperCase());
    return initials.join(".");
}
console.log(abbrevName("Bruno Mars"));
console.log(abbrevName("Miguel Sanchez"));
