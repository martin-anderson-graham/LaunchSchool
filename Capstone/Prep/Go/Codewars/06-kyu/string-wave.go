package kata

import "strings"

func wave(words string) []string {
	result := make([]string, 0)

	for i, l := range words {
		if l != ' ' {
			result = append(result, words[:i]+strings.ToUpper(string(l))+words[i+1:])
		}
	}

	return result
}
