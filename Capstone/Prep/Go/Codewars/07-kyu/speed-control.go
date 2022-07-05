package kata

import "sort"

func calculateSpeed(s int, d1, d2 float64) float64 {
	return (3600 * (d2 - d1) / float64(s))
}

func Gps(s int, x []float64) int {
	if len(x) <= 1 {
		return 0
	}

	speeds := make([]int, len(x)-1)

	for i := 0; i < len(x)-1; i += 1 {
		speeds[i] = int(calculateSpeed(s, x[i], x[i+1]))
	}

	sort.Ints(speeds)

	return speeds[len(speeds)-1]
}
