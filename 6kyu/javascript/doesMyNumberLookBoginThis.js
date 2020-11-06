function narcissistic(value) {
  arr = value.toString().split('')
  len = arr.length
  sum = 0
  for(i=0;i<len;i++){
    sum += Math.pow(arr[i],len)
  }
  if(sum === value){
    return true
  }
  return false
}
