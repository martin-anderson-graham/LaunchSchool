package kata

import "sort"

func GetSum(a, b int) (sum int) {
	if a == b {
		return a
	}

	var nums []int = []int{a, b}
	sort.Ints(nums)

	for i := nums[0]; i <= nums[1]; i += 1 {
		sum += i
	}

	return
}
