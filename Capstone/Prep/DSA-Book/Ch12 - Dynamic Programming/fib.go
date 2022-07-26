package main

import "fmt"

var fibs map[int]int = map[int]int{}
var count int = 0

func fib(n int) int {
	fmt.Println(fmt.Sprintf("count:%v", count))
	count++
	current, ok := fibs[n]
	if ok {
		return current
	} else if n == 0 || n == 1 {
		fibs[n] = n
		return n
	} else {
		next := fib(n-1) + fib(n-2)
		fibs[n] = next
		return next
	}
}

func main() {
	fmt.Println(fib(6))
}
