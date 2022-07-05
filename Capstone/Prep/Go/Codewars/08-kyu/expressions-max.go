package kata

func ExpressionMatter(a int, b int, c int) int {
	results := make([]int, 0)

	results = append(results, a*b+c)
	results = append(results, a*(b+c))
	results = append(results, a*b*c)
	results = append(results, a+b+c)
	results = append(results, a+b*c)
	results = append(results, (a+b)*c)

	max := results[0]

	for _, v := range results {
		if v > max {
			max = v
		}
	}

	return max
}
