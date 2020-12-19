function hello(name) {
  if (name == '' || !name) {
    return 'Hello, World!'
  }
  return 'Hello, ' + name[0].toUpperCase() + name.substring(1).toLowerCase() + "!";
}
