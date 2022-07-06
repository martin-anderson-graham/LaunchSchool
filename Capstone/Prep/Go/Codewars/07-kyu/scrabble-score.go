package kata

import "strings"

func ScrabbleScore(st string) (score int) {
	DictScores := make(map[string]int)

	for _, v := range st {
		score += DictScores[strings.ToUpper(string(v))]
	}
	return
}
