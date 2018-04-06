// Perkalian unik

function perkalianUnik(arr) {
  var arr2 = [];

  for(var i = 0; i < arr.length; i++) {
    arr2[i] = 1;
    for(var j = 0; j < arr.length; j++) {
      if(j !== i) {
        arr2[i] = arr2[i] * arr[j];
      }
    }
  }
  return arr2;
}

console.log(perkalianUnik([2, 4, 6]));
console.log(perkalianUnik([1, 2, 3, 4, 5]));
