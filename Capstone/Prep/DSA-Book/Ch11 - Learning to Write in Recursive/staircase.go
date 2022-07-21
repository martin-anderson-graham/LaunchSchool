package main

import "fmt"

func staircase(steps int) int {
	if steps == 0 {
		return 0
	} else if steps == 1 {
		return 1
	} else if steps == 2 {
		return 2
	} else if steps == 3 {
		return 4
	} else {
		return staircase(steps-1) + staircase(steps-2) + staircase(steps-3)
	}
}

func main() {
	fmt.Println(staircase(10))
}
