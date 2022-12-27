const prices = [4.99, 5.99, 1.99, 19.99, 14.99, 11.99];

const total = prices.reduce((total, price) => total + price);
console.log(`${Math.round(total)}$`);

const maxPrice = prices.reduce((max, price) => (max > price ? max : price));
console.log(maxPrice);
