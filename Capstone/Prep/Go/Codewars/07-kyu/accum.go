package kata

import "strings"

func Accum(s string) string {
	letters := make([]string, len(s))
	for i, v := range s {
		word := strings.ToUpper(string(v))
		for j := 1; j <= i; j++ {
			word += strings.ToLower(string(v))
		}
		letters[i] = word
	}
	return strings.Join(letters, "-")
}
