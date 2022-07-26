package main

import "fmt"

func fib(n int) int {
	first := 0
	second := 1
	count := 1

	for count < n {
		temp := second
		second = first + second
		first = temp
		count++
	}

	return second
}

func main() {
	fmt.Println(fib(6))
}
