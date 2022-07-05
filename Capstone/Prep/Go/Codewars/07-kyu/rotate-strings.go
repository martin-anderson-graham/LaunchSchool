package main

import (
	"strconv"
)

func rotate(n string) string {
	return string(n[1:]) + string(n[0])
}

func MaxRot(n int64) int64 {
	str := strconv.FormatInt(n, 10)

	values := make([]int64, len(str))

	currentStr := str
	for i := 0; i < len(str); i += 1 {
		values[i], _ = strconv.ParseInt(currentStr, 10, 64)
		currentStr = currentStr[:i] + rotate(currentStr[i:])
	}

	var result int64 = 0
	for _, v := range values {
		if v > result {
			result = v
		}
	}

	return result
}

func main() {
	println(MaxRot(56789))
}
