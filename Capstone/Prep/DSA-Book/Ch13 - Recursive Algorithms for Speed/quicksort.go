package main

import (
	"fmt"
)

type Sortable struct {
	arr *[]int
}

func (toSort *Sortable) partition(lp, rp int) int {
	pivot_index := rp
	arr := *toSort.arr
	pivot := arr[pivot_index]

	rp -= 1

	for {
		for arr[lp] < pivot {
			lp += 1
		}
		for arr[rp] > pivot && rp != 0 {
			rp -= 1
		}
		if lp >= rp {
			break
		} else {
			arr[lp], arr[rp] = arr[rp], arr[lp]
			lp += 1
		}
	}
	arr[pivot_index], arr[lp] = arr[lp], arr[pivot_index]

	return lp
}

func (toSort *Sortable) quicksort(lp, rp int) {
	if rp-lp <= 0 {
		return
	}

	pivot_index := toSort.partition(lp, rp)

	toSort.quicksort(lp, pivot_index-1)
	toSort.quicksort(pivot_index+1, rp)
}

func main() {
	arr := []int{0, 5, 2, 1, 6, 3}

	sarr := Sortable{&arr}
	sarr.quicksort(0, len(*sarr.arr)-1)

	fmt.Println(*sarr.arr)
}
