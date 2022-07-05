package kata

import "math"

func MinMax(arr []int) [2]int {
	max := math.MinInt
	min := math.MaxInt

	for _, v := range arr {
		if v > max {
			max = v
		}
		if v < min {
			min = v
		}
	}

	return [2]int{min, max}
}
