function getAverage(marks){
    return Math.floor(marks.reduce(total)/marks.length)
  }
  
  let total = (value, array)=>{
    return array + value
  }