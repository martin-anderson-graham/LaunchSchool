package main

import "fmt"

func hash(str string) int {
	prod := 1
	for _, v := range str {
		prod *= int(v)
	}
	return prod % 100
}

func findDuplicate(arr []string) string {
	hashTable := make([]bool, 100)
	for _, v := range arr {
		vHash := hash(v)
		if hashTable[vHash] {
			return v
		}
		hashTable[vHash] = true
	}
	return ""
}

func main() {
	arr := []string{"a", "b", "c", "d", "c", "e", "f"}
	fmt.Println(findDuplicate(arr))
}
