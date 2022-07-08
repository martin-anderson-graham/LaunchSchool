package kata

import (
	"fmt"
	"sort"
	"strconv"
	"strings"
)

func contains(a []string, e string) bool {
	for _, v := range a {
		if v == e {
			return true
		}
	}
	return false
}

func replace37(n int) int {
	str := strconv.Itoa(n)
	letters := strings.Split(str, "")
	if !contains(letters, "3") && !contains(letters, "7") {
		return n
	} else {
		for i, l := range letters {
			if l == "3" {
				letters[i] = "7"
			} else if l == "7" {
				letters[i] = "3"
			}
		}
		result, _ := strconv.Atoi(strings.Join(letters, ""))
		fmt.Println(result)
		return int(result)
	}
}

func SortTwisted37(arr []int) []int {
	result := make([]int, len(arr))
	copy(result, arr)

	for i, v := range result {
		result[i] = replace37(v)
	}

	sort.Ints(result)
	for i, v := range result {
		result[i] = replace37(v)
	}

	return result
}
