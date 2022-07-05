package kata

import "strings"

func IsPalindrome(str string) bool {
	lower := strings.ToLower(str)
	for index, value := range lower {
		if value != rune(lower[len(lower)-1-index]) {
			return false
		}
	}
	return true
}
