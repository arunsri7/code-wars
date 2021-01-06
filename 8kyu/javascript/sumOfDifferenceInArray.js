function sumOfDifferences(arr) {
    arr.sort((a, b) => b - a)
    sum = 0
    for (i = 0; i < arr.length - 1; i++) {
        sum += arr[i] - arr[i + 1]
    }
    return sum
}