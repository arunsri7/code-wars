function friend(friends){
    return friends.filter(x=>x.length===4)
}

// Without using the higher order function

//    function friend(friends){
//     arr = Array()
//     for(i of friends){
//     if(i.length===4){
//       arr.push(i)
//      continue
//     }
//     }
//     return arr
//   }