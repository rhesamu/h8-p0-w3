function targetTerdekat(arr) {
  // you can only write your code here!
  var distance = []
  //var isMatched = false;

  for (var i = 0; i < arr.length; i++) {
    var count = 0;

    if (arr[i] === 'o') {
      for (var j = i+1; j < arr.length; j++) {
        if (arr[j] === 'x') {
          count = j - i;
          distance.push(count);
        }
      }
    }

    if (arr[i] === 'x') {
      for (var j = i+1; j < arr.length; j++) {
        if (arr[j] === 'o') {
          count = j - i;
          distance.push(count);
        }
      }
    }
  }
  //console.log(distance);
  if (distance.length === 0) {
    return 0
  }

  distance.sort(function(a, b) { return a > b });
  return distance[0];
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
