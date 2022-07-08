package kata

func TwoSum(numbers []int, target int) [2]int {
	for i1, v1 := range numbers {
		for i2, v2 := range numbers[i1+1:] {
			if v1+v2 == target {
				return [2]int{i1, i1 + i2 + 1}
			}
		}
	}

	return [2]int{}
}
