package main

import "fmt"

func main() {
	var mp map[int]int = map[int]int{
		3: 4,
		5: 6,
	}

	fmt.Println(mp)
	fmt.Println(mp[3])
}
