function balikString(string) {
  var index = string.length - 1;
  var reversed = ''

  while(index >= 0) {
    reversed = reversed + string[index]
    index = index - 1
  }

  return reversed
}

var name = "Rhesa Utomo"
console.log(balikKata(name))
