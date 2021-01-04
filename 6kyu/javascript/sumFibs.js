function sumFibs(num) {
    sum = 0
    a = 0
    b = 1
    for (i = 0; i < num - 1; i++) {
        b = a + b
        a = b - a
        if (b % 2 == 0) {
            sum += b
        }
    }
    return sum
};