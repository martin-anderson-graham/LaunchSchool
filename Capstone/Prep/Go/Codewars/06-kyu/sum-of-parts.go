package kata

func Sum(vals []uint64) (sum uint64) {
	for _, v := range vals {
		sum += v
	}
	return
}

func PartsSums(ls []uint64) (sums []uint64) {
	currentSum := Sum(ls)
	for _, v := range ls {
		sums = append(sums, currentSum)
		currentSum -= v
	}
	sums = append(sums, 0)
	return
}
