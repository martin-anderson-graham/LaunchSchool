package main

import "fmt"

func findx(str string) int {
	if str[0] == 'x' {
		return 0
	}
	return findx(str[1:]) + 1
}

func main() {
	str := "abcdefghijklmnopqrstuvwxyz"

	fmt.Println(findx(str))
}
