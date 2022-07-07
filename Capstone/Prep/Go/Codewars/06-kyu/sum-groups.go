package kata

func isEven(n int) bool {
	return n%2 == 0
}

func sumElements(arr []int, first int, second int) (sum int) {
	for i := first; i <= second; i++ {
		sum += arr[i]
	}
	return
}

func SumGroups(arr []int) int {
	processing := true

	for processing {
		processing = false
		temp := make([]int, 0)

		firstIndex := 0
		secondIndex := 1
		streak := false
		for firstIndex < len(arr) {
			if secondIndex < len(arr) && isEven(arr[firstIndex]) == isEven(arr[secondIndex]) {
				streak = true
				processing = true
				secondIndex++
			} else {
				if streak {
					temp = append(temp, sumElements(arr, firstIndex, secondIndex-1))
					streak = false
				} else {
					temp = append(temp, arr[firstIndex])
				}
				firstIndex = secondIndex
				secondIndex = firstIndex + 1
			}
		}
		arr = temp
	}

	return len(arr)
}
