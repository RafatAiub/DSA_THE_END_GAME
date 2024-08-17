// now use maxProfit function
// It is not possible to sell before buy

const maxProfit = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];

    //if current price is less then minPrice then update min price
    minPrice = Math.min(minPrice, currentPrice);

    // compare current price difference with min price
    const potentialProfit = currentPrice - minPrice;
    console.log(
      `Minimum buying price ${minPrice}tk/- and current selling price is ${currentPrice}tk/-`
    );
    console.log(`Potential Profit is ${potentialProfit}tk/- `);
    maxProfit = Math.max(maxProfit, potentialProfit);
  }
  return maxProfit;
};

const stocks = [7, 1, 5, 3, 6, 4];

console.log(`So, The Max Profit can generate : ${maxProfit(stocks)}/-`);
