package kata

import (
	"strconv"
	"strings"
)

func findNumberInString(s string) int {
	for _, v := range s {
		if v >= '0' && v <= '9' {
			result, _ := strconv.Atoi(string(v))
			return result
		}
	}
	return 0
}

func Order(sentence string) string {
	if sentence == "" {
		return ""
	}

	wordMap := map[int]string{}
	words := strings.Split(sentence, " ")

	for _, s := range words {
		wordMap[findNumberInString(s)] = s
	}

	result := make([]string, 0)
	for i := 1; i <= len(words); i++ {
		result = append(result, wordMap[i])
	}

	return strings.Join(result, " ")
}
