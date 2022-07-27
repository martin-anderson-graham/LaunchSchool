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

func greatestNumberNLOGN(arr []int) int {
	toSort := &Sortable{&arr}
	toSort.quicksort(0, len(*toSort.arr)-1)
	sorted := *toSort.arr
	return sorted[len(sorted)-1]
}

func greatestNumberN(arr []int) int {
	max := -int(^uint(0)>>1) - 1
	for _, v := range arr {
		if v > max {
			max = v
		}
	}
	return max
}

func greatestNumberNN(arr []int) int {
	if len(arr) == 1 {
		return arr[0]
	}
	maxRest := greatestNumberNN(arr[1:])
	if arr[0] > maxRest {
		return arr[0]
	}
	return maxRest
}

func main() {
	arr := []int{1, 8, 5, 10, 4, 15, 10, 7, 2, 4}
	fmt.Println(greatestNumberNN(arr))
	fmt.Println(arr)
	fmt.Println(greatestNumberNN(arr))
	fmt.Println(arr)
	fmt.Println(greatestNumberNLOGN(arr))
	fmt.Println(arr)
}
