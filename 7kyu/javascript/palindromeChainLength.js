var palindromeChainLength = function (n) {
    chainLength = 0
    while (!isPalindrome(n.toString())) {
        n = n + Number(n.toString().split("").reverse().join(""))
        chainLength += 1
    }
    return chainLength
};

let isPalindrome = (a) => {
    if (a === a.split("").reverse().join("")) {
        console.log(a)
        return true
    }
    return false
}