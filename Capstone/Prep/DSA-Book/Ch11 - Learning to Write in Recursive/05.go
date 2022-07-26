package main

import "fmt"

func uniquePaths(row, col int) int {
	if row == 1 {
		return 1
	} else if col == 1 {
		return 1
	} else {
		return uniquePaths(row-1, col) + uniquePaths(row, col-1)
	}
}

func main() {
	fmt.Println(uniquePaths(50, 20))
}
