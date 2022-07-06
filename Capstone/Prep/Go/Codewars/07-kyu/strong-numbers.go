package kata

import "strconv"

func Strong(n int) string {
	strNum := strconv.FormatInt(int64(n), 10)
	sum := 0
	for _, v := range strNum {
		num, _ := strconv.ParseInt(string(v), 10, 32)
		fac := 1
		for i := num; i > 1; i-- {
			fac *= int(i)
		}
		sum += fac
	}
	if sum == n {
		return "STRONG!!!!"
	} else {
		return "Not Strong !!"
	}
}
