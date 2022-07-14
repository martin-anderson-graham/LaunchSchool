package main

import "fmt"

func insertion(arr []int) []int {
	for i := 1; i < len(arr); i++ {
		val := arr[i]
		for j := i - 1; j >= 0; j-- {
			if val < arr[j] {
				arr[j+1] = arr[j]
				if j == 0 {
					arr[0] = val
				}
			} else {
				arr[j+1] = val
				break
			}
		}
	}
	return arr
}

func main() {
	arr := []int{4, 2, 7, 1, 3}
	fmt.Println(insertion(arr))
}
