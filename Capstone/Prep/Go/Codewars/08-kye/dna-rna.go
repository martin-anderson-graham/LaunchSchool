package kata

import "strings"

func DNAtoRNA(dna string) string {
	slice := make([]string, len(dna))
	for index := range slice {
		if string(dna[index]) == "T" {
			slice[index] = "U"
		} else {
			slice[index] = string(dna[index])
		}
	}
	return strings.Join(slice, "")
}
