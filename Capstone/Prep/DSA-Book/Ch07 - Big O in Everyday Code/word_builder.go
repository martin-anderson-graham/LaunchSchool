package main

import "fmt"

func wordBuilder(letters []string) []string {
	result := make([]string, 0)

	for i, first := range letters {
		for j, second := range letters {
			if i != j {
				result = append(result, first+second)
			}
		}
	}

	return result
}

func main() {
	let := []string{"a", "b", "c", "d"}
	fmt.Println(wordBuilder(let))
}
