package kata

import (
	"fmt"
	"strconv"
	"strings"
)

func FindDiscounted(prices string) string {
	priceSlice := strings.Split(prices, " ")
	numSlice := make([]int64, len(priceSlice))
	for i, v := range priceSlice {
		a, _ := strconv.ParseInt(v, 10, 64)
		numSlice[i] = int64(a)
	}

	//sort.Slice(numSlice, func(i, j int) bool { return numSlice[i] < numSlice[j] })
	fmt.Println(numSlice)

	result := make([]string, 0)
	used := make([]bool, len(numSlice))

	for i, v := range numSlice {
		if used[i] {
			continue
		}
		for j, v2 := range numSlice {
			if used[j] {
				continue
			}
			if v*4 == v2*3 {
				used[j] = true
				used[i] = true
				d := v
				if v2 < v {
					d = v2
				}
				c := strconv.FormatInt(d, 10)
				result = append(result, c)
				break
			}
		}
	}

	return strings.Join(result, " ")
}
