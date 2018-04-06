function isPalindrome(kata) {
  var count = Math.floor(kata.length / 2);

  if(kata.length < 1 || kata === undefined) {
    return false;
  }
  else if(kata.length === 1) {
    return true;
  }

  for (var i = 0; i < count; i++) {
    if(kata[i] !== kata[kata.length - 1 - i]) {
      return false;
    }
    return true;
  }
}

console.log(isPalindrome('katak'));
console.log(isPalindrome('budi'));
console.log(isPalindrome('kasur ini rusak'));
console.log(isPalindrome('a'));
console.log(isPalindrome('aa'));
console.log(isPalindrome(''))
