package kata

func ReverseSeq(n int) []int {
	result := make([]int, n)
	for i := range result {
		result[n-1-i] = i + 1
	}
	return result
}
