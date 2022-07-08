package kata

func Max(vals []int) int {
	max := vals[0]
	result := 0
	for i := 1; i < len(vals); i++ {
		if vals[i] > max {
			result = i
			max = vals[i]
		}
	}
	return result
}

func profitFromSlice(vals []int) (sum int) {
	for i := 0; i < len(vals)-1; i++ {
		sum -= vals[i]
	}
	sum += vals[len(vals)-1] * (len(vals) - 1)
	return
}

func isStrictlyDecreasing(vals []int) bool {
	if len(vals) == 0 {
		return true
	}
	for i := 0; i < len(vals)-1; i++ {
		if vals[i+1] > vals[i] {
			return false
		}
	}
	return true
}

func GetMostProfitFromStockQuotes(quotes []int) int {
	profit := 0
	prices := make([]int, len(quotes))
	copy(prices, quotes)
	for !isStrictlyDecreasing(prices) {
		maxIndex := Max(prices)
		if maxIndex == 0 {
			prices = prices[1:]
			continue
		} else if maxIndex < len(prices)-1 {
			profit += profitFromSlice(prices[:maxIndex+1])
		} else {
			profit += profitFromSlice(prices)
			break
		}
		prices = prices[maxIndex+1:]
	}

	return profit
}
