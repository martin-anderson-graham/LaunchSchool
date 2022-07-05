package kata

func GetTheVowels(word string) int {
	count := 0
	vowels := [5]string{"a", "e", "i", "o", "u"}
	vowelIndex := 0
	for _, value := range word {
		if string(value) == vowels[vowelIndex] {
			count++
			vowelIndex = (vowelIndex + 1) % 5
		}
	}

	return count
}
