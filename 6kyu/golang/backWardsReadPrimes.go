package kata

import (
	"math"
)

var primes = make([]int, 0)
var notPrimes = make([]int, 0)

func Contains(s []int, n int) bool {
	for _, val := range s {
		if val == n {
			return true
		}
	}
	return false
}

func BackwardsPrime(start int, stop int) []int {
	array := []int{}
	for i := start; i <= stop; i++ {
		if i < 10 || i == reverse(i) {
			continue
		}
		if isPrime(i) && isPrime(reverse(i)) {
			array = append(array, i)
		}
	}
	if start >= stop || len(array) == 0 {
		return nil
	}
	return array
}

func reverse(n int) int {
	r := 0
	for n > 0 {
		r *= 10
		r += n % 10
		n /= 10
	}
	return r
}

func isPrime(n int) bool {
	if Contains(primes, n) {
		return true
	} else if Contains(notPrimes, n) {
		return false
	}
	for d := 2; d <= int(math.Sqrt(float64(n))); d++ {
		if n%d == 0 {
			notPrimes = append(notPrimes, n)
			return false
		}
	}

	if n > 1 {
		primes = append(primes, n)
	}

	return n > 1
}
