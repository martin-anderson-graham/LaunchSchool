package main

import "fmt"

func evens(arr []int) []int {
	if len(arr) == 0 {
		return []int{}
	} else if arr[0]%2 == 0 {
		return append([]int{arr[0]}, evens(arr[1:])...)
	} else {
		return evens(arr[1:])
	}
}

func main() {
	arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}
	fmt.Println(evens(arr))
}
