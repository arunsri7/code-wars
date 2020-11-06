var greet = function(name) {
    if(name === name.toLowerCase()){
      return "Hello " + name[0].toUpperCase() + name.slice(1) + "!"
    }else{
      return "Hello " + name[0]+ name.slice(1).toLowerCase() + "!"
    }
  };