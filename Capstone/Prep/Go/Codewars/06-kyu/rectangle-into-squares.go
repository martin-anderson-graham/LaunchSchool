package kata

func SquaresInRect(lng int, wdth int) []int {
	if lng == wdth {
		return nil
	}
	result := make([]int, 0)
	currentL, currentW := lng, wdth

	for currentL > 0 && currentW > 0 {
		if currentL <= currentW {
			result = append(result, currentL)
			currentW -= currentL
		} else {
			result = append(result, currentW)
			currentL -= currentW
		}
	}

	return result
}
