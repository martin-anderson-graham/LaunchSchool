package main

import "fmt"

func countX(str string) int {
	if len(str) == 0 {
		return 0
	} else if str[0] == 'x' {
		return countX(str[1:]) + 1
	} else {
		return countX(str[1:])
	}
}

func main() {
	str := "axbxcxxxxd"
	fmt.Println(countX(str))
}
