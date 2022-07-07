package kata

import "strings"

func reverse(word string) string {
	result := make([]string, 0)
	for i := len(word) - 1; i >= 0; i-- {
		result = append(result, string(word[i]))
	}
	return strings.Join(result, "")
}

func SpinWords(str string) string {
	resultArr := make([]string, 0)
	wordArr := strings.Split(str, " ")
	for _, v := range wordArr {
		if len(v) < 5 {
			resultArr = append(resultArr, v)
		} else {
			resultArr = append(resultArr, reverse(v))
		}
	}

	return strings.Join(resultArr, " ")
}
