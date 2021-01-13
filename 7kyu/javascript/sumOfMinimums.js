function sumOfMinimums(arr) {
    sum = 0
    for (i of arr) {
        sum += Math.min(...i)
    }
    return sum
}