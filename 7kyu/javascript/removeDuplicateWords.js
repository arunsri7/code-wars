function removeDuplicateWords (s) {
    s = s.split(' ')
    a = Array()
    for(i=0;i < s.length;i++){
      if(a.includes(s[i])){
        continue
      }
      a.push(s[i])
    }
    return a.join(' ')
  }