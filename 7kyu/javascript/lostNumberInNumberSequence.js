function findDeletedNumber(arr, mixArr) {
  deletion = false
  for(i of arr){
    if(!mixArr.includes(i)){
      deletion = true
      break
    }
  }
  if(deletion == true){
     return i
  }
 return 0
}