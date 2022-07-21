package main

import "fmt"

func anagrams(str string) []string {
	result := make([]string, 0)
	if len(str) == 1 {
		result = append(result, str)
	} else {
		prior := anagrams(str[1:])
		for _, word := range prior {
			for i := range word {
				result = append(result, word[:i]+string(str[0])+word[i:])
			}
			result = append(result, word + string(str[0]))
		}
	}
	return result
}

func main() {
	str := "abcde"
	fmt.Println(anagrams(str))
}
