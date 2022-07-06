package kata

import "strings"

func BabySharkLyrics() (r string) {
	s := " shark"
	vs := []string{"Baby" + s, "Mommy" + s, "Daddy" + s, "Grandma" + s, "Grandpa" + s, "Let's go hunt"}
	for _, v := range vs {
		r += strings.Repeat(v+","+strings.Repeat(" doo", 6)+"\n", 3)
		r += v + "!\n"
	}
	r += "Run away,…\n"
	return
}
