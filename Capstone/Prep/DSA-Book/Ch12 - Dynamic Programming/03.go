package main

import "fmt"

var paths map[string]int = map[string]int{}

func hash(r, c int) string {
	return fmt.Sprint(r) + fmt.Sprint(c)
}

func unique_paths(r, c int) int {
	if r == 1 || c == 1 {
		return 1
	}
	current, ok := paths[hash(r, c)]
	if ok {
		return current
	}

	first, ok1 := paths[hash(r-1, c)]
	if !ok1 {
		first = unique_paths(r-1, c)
	}
	second, ok2 := paths[hash(r, c-1)]
	if !ok2 {
		second = unique_paths(r, c-1)
	}
	paths[hash(r, c)] = first + second
	return first + second
}

func main() {
	fmt.Println(unique_paths(50, 20))
}
