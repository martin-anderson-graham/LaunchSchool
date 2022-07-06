package kata

import "strings"

func VertMirror(s string) string {
	words := strings.Split(s, "\n")
	result := make([]string, len(words))
	for i, v := range words {
		word := make([]string, len(v))
		for j, l := range v {
			word[len(v)-1-j] = string(l)
		}
		result[i] = strings.Join(word, "")
	}
	return strings.Join(result, "\n")
}
func HorMirror(s string) string {
	words := strings.Split(s, "\n")
	result := make([]string, len(words))
	for i, v := range words {
		result[len(result)-1-i] = v
	}
	return strings.Join(result, "\n")
}

type FParam func(string) string

func Oper(f FParam, x string) string {
	return f(x)
}
