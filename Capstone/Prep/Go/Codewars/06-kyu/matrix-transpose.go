package kata

func Transpose(matrix [][]int) [][]int {
	result := make([][]int, len(matrix[0]))
	for i := range result {
		result[i] = make([]int, len(matrix))
	}

	for i, mtrx := range matrix {
		for j, v := range mtrx {
			result[j][i] = v
		}
	}

	return result
}
