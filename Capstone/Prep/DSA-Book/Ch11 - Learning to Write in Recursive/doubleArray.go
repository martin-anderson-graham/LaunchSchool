package main

import "fmt"

func inPlaceDouble(arr []int, index int) {
	if index == len(arr) {
		return
	} else {
		arr[index] *= 2
		inPlaceDouble(arr, index+1)
	}
}

func main() {
	arr := []int{1, 2, 3, 4, 5, 6, 7}
	inPlaceDouble(arr, 0)
	fmt.Println(arr)
}
