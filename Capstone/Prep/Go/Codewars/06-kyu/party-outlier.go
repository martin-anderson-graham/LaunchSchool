package kata

func abs(n int) int {
	if n < 0 {
		return -1 * n
	}
	return n
}

func FindOutlier(integers []int) int {
	oddCount := abs(integers[0])%2 + abs(integers[1])%2 + abs(integers[2])%2
	isEven := oddCount < 2
	for _, v := range integers {
		if (abs(v)%2 == 0) != isEven {
			return v
		}
	}
	return 0
}
