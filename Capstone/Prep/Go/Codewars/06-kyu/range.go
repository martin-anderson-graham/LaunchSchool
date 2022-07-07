package kata

import "math"

func Range(start, end, step int) []int {
	result := make([]int, 0)
	if end < start {
		return result
	}

	var targetLength int

	if step == 0 {
		targetLength = end - start
	} else {
		targetLength = int(math.Ceil((float64(end) - float64(start)) / float64(step)))
		if targetLength < 0 {
			targetLength *= -1
		}
	}
	current := start
	for len(result) < targetLength {
		result = append(result, current)
		current += step
	}

	return result
}
