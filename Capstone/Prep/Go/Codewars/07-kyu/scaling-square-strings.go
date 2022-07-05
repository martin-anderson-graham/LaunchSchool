package kata

import (
	"strings"
)

func Scale(s string, k, n int) string {
	rows := strings.Split(s, "\n")

	result := make([]string, 0)

	for _, word := range rows {
		currentRow := ""
		for _, letter := range word {
			currentRow = currentRow + strings.Repeat(string(letter), k)
		}
		if currentRow != "" {
			for i := 0; i < n; i += 1 {
				result = append(result, currentRow)
			}
		}
	}

	return strings.Join(result, "\n")
}
