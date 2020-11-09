var moveZeros = function (arr) {
    for(i of arr){
      if(i===0){
        arr.push(i)
        arr.splice(arr.indexOf(i),1)
      }
    }
    return arr
  }