package main

import "fmt"

func triangle(n int) int {
	if n == 1 {
		return 1
	}
	return n + triangle(n-1)
}

func main() {
	fmt.Println(triangle(1))
	fmt.Println(triangle(2))
	fmt.Println(triangle(3))
	fmt.Println(triangle(4))
	fmt.Println(triangle(5))
	fmt.Println(triangle(6))
	fmt.Println(triangle(7))
}
