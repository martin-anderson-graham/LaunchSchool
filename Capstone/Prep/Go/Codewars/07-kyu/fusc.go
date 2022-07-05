package kata

func Fusc(n int) int {
	if n == 0 {
		return 0
	}
	if n == 1 {
		return 1
	}

	if n%2 == 0 {
		return Fusc(n / 2)
	} else {
		newN := (n - 1) / 2
		return Fusc(newN) + Fusc(newN+1)
	}
}
