package main

import "fmt"

type Sortable struct {
	arr *[]int
}

func (sortable *Sortable) partition(lp, rp int) int {
	pivot_index := rp
	arr := *sortable.arr
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
	arr[pivot_index], arr[lp] = arr[lp], pivot
	return lp
}

func (sortable *Sortable) quicksort(lp, rp int) {
	if rp-lp <= 0 {
		return
	}
	pivot_index := sortable.partition(lp, rp)
	sortable.quicksort(pivot_index+1, rp)
	sortable.quicksort(lp, pivot_index-1)
}

func findMissingInteger(arr []int) int {
	toSort := &Sortable{&arr}
	toSort.quicksort(0, len(*toSort.arr)-1)

	sortedArr := *toSort.arr
	for k := 0; k < len(sortedArr); k++ {
		if sortedArr[k] != k {
			return k
		}
	}
	return -1
}

func main() {
	arr := []int{0, 7, 4, 5, 2, 9, 1, 6, 3}
	val := findMissingInteger(arr)
	fmt.Println(val)
}
