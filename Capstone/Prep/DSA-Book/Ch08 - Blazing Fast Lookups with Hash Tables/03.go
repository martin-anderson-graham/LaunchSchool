package main

import "fmt"

func findMissing(str string) string {
	hashTable := make([]bool, int('z')+1)

	for _, l := range str {
		index := int(l)
		hashTable[index] = true
	}

	for i, v := range hashTable {
		if i < int('a') {
			continue
		}
		if !v {
			return string(rune(i))
		}
	}

	return ""
}

func main() {
	str := "the quick brown foc jumps over a lazy dog"
	fmt.Println(findMissing(str))
}
