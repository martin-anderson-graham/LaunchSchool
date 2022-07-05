package kata

import "strings"

func PartList(arr []string) string {
	strSlice := make([]string, len(arr)-1)

	for i := 1; i < len(arr); i += 1 {
		strSlice[i-1] = strings.Join(arr[:i], " ") + ", " + strings.Join(arr[i:], " ")
	}

	return "(" + strings.Join(strSlice, ")(") + ")"
}
