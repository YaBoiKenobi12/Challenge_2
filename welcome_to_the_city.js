function sayHello(name, city, state) {
    const fullName = name.join(" ");
    const message = `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
    return message;
}
console.log(sayHello(['Miguel', 'Montes de Oca'], 'Nuestra señora de La Paz', 'La Paz')); 