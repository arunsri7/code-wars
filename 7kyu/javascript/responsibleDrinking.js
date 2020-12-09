
function hydrate(s) {
    total = 0
    for (i of s) {
        i = Number(i)
        if (isNumber(i)) {
            total += i
        }
    }
    if (total === 1) {
        return '1 glass of water'
    }
    return `${total} glasses of water`
}

let isNumber = (value) => typeof value === 'number' && isFinite(value)