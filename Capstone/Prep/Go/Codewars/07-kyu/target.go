package kata

func Solution(mtrx [][]rune) bool {
	for _, row := range mtrx {
		arrow, target := false, false
		for _, l := range row {
			if l == 'x' {
				if arrow {
					return true
				}
				target = true
			} else if l == '>' {
				if target {
					return false
				}
				arrow = true
			}
		}
	}
	return false
}
