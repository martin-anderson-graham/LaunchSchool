package kata

import (
	"sort"
	"strings"
)

func TwoSort(arr []string) string {
	sort.Strings(arr)
	result := make([]string, len(arr[0]))
	for index, value := range arr[0] {
		result[index] = string(value)
	}
	return strings.Join(result, "***")
}
