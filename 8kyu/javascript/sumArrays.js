// Sum Numbers
function sum(numbers) {
    if (numbers.length != 0) {
        return numbers.reduce(add)
    }
    return 0
};

let add = (a, b) => a + b