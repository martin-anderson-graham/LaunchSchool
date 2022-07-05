package main

import "fmt"

func main() {
	name := "Marty"
	for _, r := range name {
		if r == 't' {
			fmt.Println("Found a t", r)
		}
	}
}
