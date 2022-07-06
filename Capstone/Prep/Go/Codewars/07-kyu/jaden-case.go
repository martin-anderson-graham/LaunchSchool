package kata

import "strings"

func ToJadenCase(str string) string {
	words := strings.Split(str, " ")
	result := make([]string, len(words))
	for i, w := range words {
		result[i] = strings.ToUpper(string(w[0])) + w[1:]
	}
	return strings.Join(result, " ")
}
