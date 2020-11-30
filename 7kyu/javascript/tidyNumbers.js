function tidyNumber(n){
    n = n.toString()
    for(i=0;i<n.length;i++){
      if(n[i]>n[i+1]){
        return false
      }
    }
    return true
  }