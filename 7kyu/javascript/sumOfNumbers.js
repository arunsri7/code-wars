function getSum( a,b )
{
  if(a===b){
    return a
  }
  if(a>b){
    temp = a
    a = b 
    b = temp
  }
  sum = 0
  for(i=a;i<=b;i++){
    sum += i
  }
  return sum
}