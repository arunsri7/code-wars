function addArrays(array1, array2) {
    if (array1.length == 0 & array2.length == 0) {
        return []
    } else if (array1.length == 0 || array2.length == 0) {
        return array1.length == 0 ? array2 : array1
    }
    let arrayToNumber1 = parseInt(array1.join(''));
    let arrayToNumber2 = parseInt(array2.join(''));
    sum = arrayToNumber1 + arrayToNumber2
    sum = sum.toString()
    array3 = Array()
    for (i = 0; i < sum.length; i++) {
        if (sum[0] == '-' && i == 0) {
            array3.push(-Number(sum[i + 1]))
        }
        else if (i > 1 && sum[0] == '-') {
            array3.push(Number(sum[i]))
        }
        else if (sum[0] != '-') {
            array3.push(Number(sum[i]))
        }
    }
    return array3
}