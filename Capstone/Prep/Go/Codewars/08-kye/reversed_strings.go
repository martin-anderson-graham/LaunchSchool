package kata

func Solution(word string) string {
	var reversed string
	var original []rune = []rune(word)

	for _, value := range original {
		reversed = string(value) + reversed
	}

	return reversed
}
