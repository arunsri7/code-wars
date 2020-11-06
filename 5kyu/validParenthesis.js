function validParentheses(parens){
    parens = parens.split('')
    open = '('
    close = ']'
    array = Array()
    flag = true
    for(i of parens){
      if(open.includes(i)){
        array.push(i)
      }else{
        if(open===array.slice(-1).join('')){
          array.pop()
        }else{
          flag = false
          break
        }
      }
    }
    console.log(parens)
    if(flag===true && array.length===0){
      return true
    }
    return false
  }