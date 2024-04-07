function formatMoney(amount) {
    let formattedAmount = "$" + amount.toFixed(2);
    return formattedAmount;
}
let amount = 39.99;
let formattedAmount = formatMoney(amount);
console.log(formattedAmount);
