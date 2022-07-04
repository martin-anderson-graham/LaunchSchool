package kata

func Maps(x []int) (d []int) {
	d = make([]int, len(x))

	for index, value := range x {
		d[index] = 2 * value
	}
	return
}
