function arrayPlusArray(arr1, arr2) {
    return arr1.reduce(sum) + arr2.reduce(sum); //something went wrong
  }
  
  
  let sum = (sum,arr) => {
    return sum + arr
  }