/*
Round
- 0.5 keatas bulat ke atas
- 0.4 kebawah bulat kebawah

Ceil
Bulat decimal ke atas

Floor
Bulat decimal ke bawah
*/

// 2, 4, 6, 8, 10, ….
var numbers = []
for(var i = 2; i <= 100; i += 2) {
	numbers.push(i);
}

// Array
// .split(), .slice(), .splice(), .sort()

// .split() -> untuk string | nilai awal tetap
// .slice() -> string dan array | nilai awal tetap
// .sort() -> array | override nilai awal, even though ditampung ke variable baru
// .splice() -> array | override nilai awal

var number = 1221;
var numstring = number.toString()
console.log(numstring + ' ' + typeof numstring)
console.log(number + ' ' + typeof number)

var date = '25/11/97';
console.log(date.split('/')) // ['25', '11', '97']

var nama = 'Loremipsum';
console.log(nama.slice(0, 3)); // potong index 0 sampai index 2 (stop di index 3)

var names = ['Dimitri', 'Alexei', 'Sergei'];
// var sortedNames = names

var sortedNames = names.slice()
// mengcopy seluruh isi array dgn cara slice, kemudian var ini tidak terhubung ke names[] lagi by reference

sortedNames.sort();
console.log(sortedNames) // sorted
console.log(names) // untouched

// Parameter pertama index start, parameter kedua deleteCount (hapus berapa banyak)
names.splice(0, 2, 'Olla')
console.log(names)

/*
[
  [2, 4, 6, 8, 10],
  [1, 3, 5, 7, 9]
]
*/
var numbers = [];

var ganjil = [];
var genap = [];

for (var i = 1; i <= 10; i++) {
  if(i % 2 !== 0) {
    ganjil.push(i);
  }
  else {
    genap.push(i);
  }
}

numbers.push(genap, ganjil);
console.log(numbers)

// access array
for (var i = 0; i < numbers.length; i++) {
  for (var j = 0; j < numbers[i].length; j++) {
    console.log(numbers[i][j]);
  }
}

// x2
for (var i = 0; i < numbers.length; i++) {
  for (var j = 0; j < numbers[i].length; j++) {
    numbers[i][j] *= 2;
  }
}

console.log(numbers)

var people = [
  ['Jokowi', 'JKT'],
  ['Budi', 'JKT'],
  ['Mickey', 'JKT'],
  ['Audi', 'JKT']
]

people.sort(function (a, b) {
  return a[0] < b[0];
}) // descending sort

console.log(people)

// mengisi array undefined example
var numArray = [
  [],
  [],
  [],
  undefined,
  [],
  []
]

for (var i = 0; i < numArray.length; i++) {
  if (numArray[i] !== undefined) {
    numArray[i].push(10)
  }
  else {
    numArray[i] = [10]
  }
}

console.log(numArray)

// NaN === NaN ? -> false
// [] === [] ? -> false
// [1, 2, 3] === [1, 2, 3] ? -> false
// undefined === undefined ? -> true
// 0 == false ? -> true, 0 === false ? -> false

var array1 = [1, 2, 3]
var array2 = [1, 2, 10]

var isItTheSame = true

for (var i = 0; i < array1.length; i++) {
  if (array1[i] !== array2[i]) {
    isItTheSame = false;
    break;
  }
}

console.log(isItTheSame);
