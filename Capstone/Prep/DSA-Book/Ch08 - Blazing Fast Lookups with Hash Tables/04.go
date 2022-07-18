package main

import (
	"fmt"
)

func findNonDuplicate(str string) string {
	hashTable := make([]int, 27)

	for _, r := range str {
		index := int(r - 'a' + 1)
		hashTable[index] = hashTable[index] + 1
	}

	for _, v := range str {
		if hashTable[v-'a'+1] == 1 {
			return string(v)
		}
	}

	return ""
}

func main() {
	str := "minibmumn"
	fmt.Println(findNonDuplicate(str))
}
