package kata

func solution(str, ending string) bool {
	if len(ending) > len(str) {
		return false
	}
	return str[(len(str)-len(ending)):] == ending
}
