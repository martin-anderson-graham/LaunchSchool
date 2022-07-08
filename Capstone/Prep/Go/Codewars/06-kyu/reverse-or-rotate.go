package kata

import (
	"strconv"
	"strings"
)

func reverse(s string) string {
	letters := strings.Split(s, "")
	for i, j := 0, len(letters)-1; i < j; i, j = i+1, j-1 {
		letters[i], letters[j] = letters[j], letters[i]
	}
	return strings.Join(letters, "")
}

func leftRotate(s string) string {
	return s[1:] + string(s[0])
}

func isDigitCubeSumEven(s string) bool {
	sum := 0
	for _, l := range s {
		digit, _ := strconv.Atoi(string(l))
		sum += digit * digit * digit
	}
	return sum%2 == 0
}

func Revrot(s string, n int) string {
	if s == "" || n <= 0 {
		return ""
	}
	result := ""
	startIndex := 0
	endIndex := n
	for endIndex <= len(s) {
		part := s[startIndex:endIndex]
		if isDigitCubeSumEven(part) {
			result += reverse(part)
		} else {
			result += leftRotate(part)
		}
		startIndex, endIndex = startIndex+n, endIndex+n
	}
	return result
}
