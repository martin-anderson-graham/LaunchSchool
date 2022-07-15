package main

import "fmt"

func meanOfEvens(vals []int) float64 {
	if len(vals) == 0 {
		return 0
	}
 
	sum := 0
	countEvens := 0

	for _, v := range vals {
		if v%2 == 0 {
			sum += v;
			countEvens++
		}
	}

	return float64(sum)/float64(countEvens)
}

func main() {
  arr := []int{1,2,3,4,5,6,7,8,9}
	fmt.Println(meanOfEvens(arr)) //5
}