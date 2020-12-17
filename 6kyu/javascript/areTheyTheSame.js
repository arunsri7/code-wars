function comp(array1, array2) {
    if (!array1 || !array2) {
        return false
    }
    array1.sort((a, b) => a - b)
    array2.sort((a, b) => a - b)
    for (i = 0; i < array1.length; i++) {
        if (array1[i] * array1[i] != array2[i]) {
            return false
        }
    }
    return true
}