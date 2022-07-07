package main

import (
	"fmt"
	"math"
	"sort"
)

func generatePrimes(n int, primes []int) []int {
	test := primes[len(primes)-1]
	for test <= n {
		isPrime := true
		for _, v := range primes {
			if test%v == 0 {
				isPrime = false
				break
			}
		}
		if isPrime {
			primes = append(primes, test)
		}
		test++
	}
	sort.Ints(primes)
	return primes
}

func isPrime(n int, primes []int) bool {
	for _, v := range primes {
		if n%v == 0 {
			return false
		}
	}
	return true
}

func determineKofNum(n int, primes []int) int {

	pIndex := 0
	pCount := 0
	for pIndex < len(primes) && n > 1 {
		if n%primes[pIndex] == 0 {
			pCount++
			n = n / primes[pIndex]
		} else {
			pIndex++
		}
	}
	if n > 1 {
		pCount++
	}
	return pCount
}

func KPrimesStep(k int, step int, m int, n int) [][]int {
	var primes []int = []int{2}
	primes = generatePrimes(2*int(math.Sqrt(float64(n))), primes)
	result := make([][]int, 0)
	kPrimes := make([]int, 0)
	for i := m; i <= n; i++ {
		if determineKofNum(i, primes) == k {
			kPrimes = append(kPrimes, i)
		}
	}
	for i := 0; i < len(kPrimes); i++ {
		for j := 0; j < i; j++ {
			if kPrimes[i]-kPrimes[j] == step {
				result = append(result, []int{kPrimes[j], kPrimes[i]})
				break
			}
		}
	}
	if len(result) == 0 {
		return nil
	}
	return result
}

func main() {
	fmt.Println(KPrimesStep(6, 8, 2627371, 2627581))
}
