package main

import "fmt"

func count(arr []string) int {
	if len(arr) == 0 {
		return 0
	}
	return count(arr[1:]) + len(arr[0])
}

func main() {
	arr := []string{"ab", "c", "def", "ghij"}
	fmt.Println(count(arr))
}
