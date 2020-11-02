function oddOrEven(array) {
    if (array.length == 0){
      return "even"
    }
    if (array.reduce(sum)%2==0){
      return "even"
    }
    else{
      return "odd"
    }
    return nil
  }
  
  let sum = (sum, arr) => {
    return sum + arr
  }