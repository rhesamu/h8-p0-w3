// string -> reverse angka
// string -> number to string
// i = number, i++
//  if

// (i = number + 1; i < number * 2; i++)
/*
numstring = number.toString()
reverse = number.reverse()

if (numstring === reverse) {
  return numstring
}
*/

function numberPalindrome(number) {
  // var count = Math.floor(numString.length / 2);

  if (number === 0) {
    return 1
  }

  for (var i = number + 1; i < number * 2; i++) {
    // var numString = number.toString();
    var reverseNum = i.toString().split('').reverse().join('')

    if (i === Number(reverseNum)) {
      return i
    }
  }
}

console.log(numberPalindrome(0))
console.log(numberPalindrome(8))
console.log(numberPalindrome(23))
console.log(numberPalindrome(1001))
console.log(numberPalindrome(2087))
