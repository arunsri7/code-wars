let menFromBoys = array => {
  let arrayWithoutDuplicates = [...new Set(array)]
  let even = arrayWithoutDuplicates.filter(number => number % 2 === 0).sort((a, b) => a - b)
  let odd = arrayWithoutDuplicates.filter(number => number % 2 != 0).sort((a, b) => b - a)
  return [...even, ...odd]
}