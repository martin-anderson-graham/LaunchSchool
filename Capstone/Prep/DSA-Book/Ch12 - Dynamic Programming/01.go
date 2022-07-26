package main

import "fmt"

func addUntil100(arr []int) int {
	if len(arr) == 0 {
		return 0
	}
	restSum := addUntil100(arr[1:])
	if arr[0]+restSum > 100 {
		return restSum
	} else {
		return arr[0] + restSum
	}
}

func main() {
	fmt.Println(addUntil100([]int{1, 2, 3, 4, 5, 99, 6}))
}
