function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    ages = [age1,age2,age3,age4,age5,age6,age7,age8]
    square = ages.map(x=> x*x)
    total = square.reduce(sum)
    return Math.floor(Math.sqrt(total)/2)
  }
  
  let sum = (value,arr) => {
    return value + arr
  }