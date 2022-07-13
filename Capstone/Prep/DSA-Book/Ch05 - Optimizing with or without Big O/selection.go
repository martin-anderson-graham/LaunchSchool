package main

import (
	"fmt"
	"math"
)

func SelectionSort(arr []int) []int {
	for i := 0; i < len(arr); i += 1 {
		minSoFar := math.MaxInt
		minIndex := 0
		for j := i; j < len(arr); j += 1 {
			if arr[j] < minSoFar {
				minSoFar = arr[j]
				minIndex = j
			}
		}
		arr[i], arr[minIndex] = arr[minIndex], arr[i]
	}

	return arr
}

func main() {
	toSort := []int{10, 5, 1, 11, 101, 32, 0, 9}
	fmt.Println(SelectionSort(toSort))
}
