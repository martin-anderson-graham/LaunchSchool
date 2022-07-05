package kata

func CountRedBeads(n int) int {
	if n == 0 {
		return 0
	}
	return 2 * (n - 1)
}
