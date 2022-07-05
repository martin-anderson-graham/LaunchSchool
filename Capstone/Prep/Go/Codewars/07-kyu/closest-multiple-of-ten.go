package kata

func ClosestMultipleOf10(n uint32) uint32 {
	if diff := n % 10; diff < 5 {
		return n - diff
	} else {
		return n - diff + 10
	}
}
