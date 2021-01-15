package kata

import (
	"unicode"
)

func solve(slice []string) []int {
	alphabet := "abcdefghijklmnopqrstuvwxyz"
	results := make([]int, len(slice))
	for i, str := range slice {
		for j, char := range str {
			if unicode.ToLower(char) == rune(alphabet[j]) {
				results[i]++
			}
		}
	}
	return results
}
