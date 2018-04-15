function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  var selisih = [];
  var jumlahSelisih = 0;

  for (var i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      selisih[i] = arr[i+1] - arr[i];
      jumlahSelisih += selisih[i]
    }
  }

  console.log(selisih)
  console.log(jumlahSelisih)

  // for (var j = 0; j < selisih.length; j++) {
  //   if (selisih[j] !== selisih[j+1]) {
  //     return false
  //   }
  // }
  // return true
}

// TEST CASES
// console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
// console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
// console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
// console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
// console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])
