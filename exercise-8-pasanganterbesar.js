// algo
// for i in num.length
//  if (i == 0)
//    temp = num[i] + num[i+1]
//    temp.join('')
//  else
//    temp2 = temp
//    temp = num[i] + num[i+1]
//    temp.join('')
//    if (temp2 > temp)
//      temp2 = temp
//

function pasanganTerbesar(num) {
  var numString = num.toString();
  var array = [];

  for(var i = 0; i < numString.length; i++) {
    if (i !== numString.length - 1) {
      array[i] = numString[i] + numString[i+1]
    }
  }

  array.sort(function(a, b) {
    return a < b
  })

  return Number(array[0])
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
