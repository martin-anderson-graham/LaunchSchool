package main

import "fmt"

func BubbleSort(arr []int) []int {
	sorted := false
	for !sorted {
		firstSortedIndex := len(arr) - 1
		sorted = true
		for i := 0; i < firstSortedIndex; i++ {
			if arr[i] > arr[i+1] {
				arr[i], arr[i+1] = arr[i+1], arr[i]
				sorted = false
			}
		}
		firstSortedIndex++
	}
	return arr
}

func main() {
	toSort := []int{10, 5, 1, 11, 101, 32, 0, 9}
	fmt.Println(BubbleSort(toSort))
}
