package kata

func CountSheeps(numbers []bool) int {
	count := 0

	for _, value := range numbers[:] {
		if value {
			count++
		}
	}

	return count // your code here
}
