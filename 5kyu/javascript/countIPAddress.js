function ipsBetween(start, end) {
    const calc = (a, b) => (end.split('.')[a] - start.split('.')[a]) * b;
    return calc(0, 256 * 256 * 256) + calc(1, 256 * 256) + calc(2, 256) + calc(3, 1)
}