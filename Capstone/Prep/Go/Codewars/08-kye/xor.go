package kata

func Xor(a, b bool) bool {
	return (a && !b) || (b && !a)
}
