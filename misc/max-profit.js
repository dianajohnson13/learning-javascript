// You will be given a list of stock prices for a given day and your 
// goal is to return the maximum profit that could have been made by 
// buying a stock at the given price and then selling the stock later 
// on. For example if the input is: [45, 24, 35, 31, 40, 38, 11] then 
// your program should return 16 because if you bought the stock at 
// $24 and sold it at $40, a profit of $16 was made and this is the 
// largest profit that could be made. If no profit could have been 
// made, return -1.

function maxProfit(prices) {
	var profit = 0;
	for (var x = 0; x < prices.length - 1; x++) {
		for (var y = x+1; y < prices.length; y++) {
			var diff = prices[y] - prices[x];
			if (diff > profit) 
				{profit = diff}
		}
	}
	if (profit > 0) return profit
	else return -1
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11] ))