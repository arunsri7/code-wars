function isPrime(num) {
    if (num <= 1) {
        return false
    }
    let i = 2
    while (i <= num ** 0.5) {
        if (num % i == 0) {
            return false
        }
        i += 1
    }
    return true
}

function getPrimes(start, finish) {
    arr = Array()
    if (start > finish) {
        temp = start
        start = finish
        finish = temp
    }
    for (i = start; i <= finish; i++) {
        if (isPrime(i)) {
            arr.push(i)
        }
        continue
    }
    return arr
}