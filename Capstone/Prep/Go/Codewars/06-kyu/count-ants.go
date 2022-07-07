package kata

import (
	"fmt"
	"math"
)

func countMaxANT(str string) int {
	var a float64 = 0
	var n float64 = 0
	var t float64 = 0

	for _, l := range str {
		if l == 'a' {
			a++
		} else if l == 'n' {
			n++
		} else if l == 't' {
			t++
		}
	}

	return int(math.Max(math.Max(a, n), t))
}

func DeadAntCount(ants string) int {

	i := 0
	for i < len(ants)-2 {
		if ants[i] == 'a' && ants[i+1] == 'n' && ants[i+2] == 't' {
			ants = ants[:i] + ants[i+3:]
		} else {
			if ants[i] != 'a' && ants[i] != 'n' && ants[i] != 't' {
				ants = ants[:i] + ants[i+1:]
			} else {
				i++
			}
		}
	}
	fmt.Println(ants)
	return countMaxANT(ants)
}
