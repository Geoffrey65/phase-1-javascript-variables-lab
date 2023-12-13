const companyName = 'Scuber'; // Fixed to match test expectation

let companyCeo = 'Susan Smith';
let mostProfitableNeighborhood = 'Chelsea';

function makeProfit(amount) {
  return amount * 1.1;
}

const profit = makeProfit(100);

console.log(`The company name is ${companyName}.`); // Fixed to match test expectation
console.log(`The CEO of the company is ${companyCeo}.`);
console.log(`The most profitable neighborhood is ${mostProfitableNeighborhood}.`);
console.log(`The profit made is ${profit}`);
