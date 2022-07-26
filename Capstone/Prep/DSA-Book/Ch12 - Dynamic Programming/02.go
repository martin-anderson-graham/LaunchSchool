package main

import "fmt"

var nums map[int]int = map[int]int{}

func golomb(n int) int {
	if n == 1 {
		return 1
	}
	_, ok := nums[n]
	if !ok {
		nums[n] = 1 + golomb(n-golomb(golomb(n-1)))
	}
	return nums[n]
}

func main() {
	for k := 0; k < 10; k++ {
		fmt.Println(golomb(k+1))
	}
}
