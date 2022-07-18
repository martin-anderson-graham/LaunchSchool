package main

import "fmt"

func findMax(values []int) int {
	max := values[0]
	for i := 1; i < len(values); i++ {
		if values[i] > max {
			max = values[i]
		}
	}
	return max
}

func union(arr1, arr2 []int) []int {
	result := make([]int, 0)

	max1 := findMax(arr1)
	max2 := findMax(arr2)

	//swap if arr1 is shorter than arr2
	if max1 < max2 {
		arr1, arr2 = arr2, arr1
		max1, max2 = max2, max1
	}
	hashTable := make([]bool, max1+1)
	for _, v := range arr1 {
		hashTable[v] = true
	}
	for _, v := range arr2 {
		if hashTable[v] {
			result = append(result, v)
		}
	}

	return result
}

func main() {
	arr1 := []int{1, 2, 3, 4, 5}
	arr2 := []int{0, 2, 4, 6, 8}
	fmt.Println(union(arr2, arr1))
}
