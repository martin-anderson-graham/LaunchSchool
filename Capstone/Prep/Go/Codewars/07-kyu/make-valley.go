package kata

import (
	"sort"
)

func MakeValley(arr []int) []int {
	sortedArr := make([]int, len(arr))
	leftResult := make([]int, 0)
	rightResult := make([]int, 0)

	copy(sortedArr, arr)
	sort.Ints(sortedArr)

	index := len(sortedArr) - 1

	for index >= 0 {
		if index > 0 {
			leftResult = append(leftResult, sortedArr[index])
			index--
		}
		rightResult = append(rightResult, sortedArr[index])
		index--
	}

	sort.Ints(rightResult)
	return append(leftResult, rightResult...)
}
