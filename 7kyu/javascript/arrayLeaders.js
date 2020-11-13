var arrayLeaders = numbers => {
    leader = Array()
    for(i=0;i<numbers.length-1;i++){
      a = Array()
      a = numbers.slice(i+1,numbers.length)
      sum = a.reduce(add) 
      if(numbers[i]>sum){
        leader.push(numbers[i])
      }
      if(i===numbers.length-2 && sum>0){
        leader.push(sum)
      }
    }
    return leader
  }
  
  let add= (value,array) => {
    return value + array
  }