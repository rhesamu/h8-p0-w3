// Array
// .split(), .slice(), .splice(), .sort()

// .split() -> untuk string | nilai awal tetap
// .slice() -> string dan array | nilai awal tetap
// .sort() -> array | override nilai awal, eventhough ditampung ke variable baru
// .splice() -> array

var date = '25/11/97';
console.log(date.split('/')) // ['25', '11', '97']

var name = 'Loremipsum';
console.log(name.slice(0, 3)); // potong index 0 sampai index 2 (stop di index 3)

var names = ['Dimitri', 'Alexei', 'Sergei'];
// var sortedNames = names

var sortedNames = names.slice()
// mengcopy seluruh isi array dgn cara slice, tidak terhubung ke names[] lagi by reference

sortedNames.sort();
console.log(sortedNames) // sorted
console.log(names) // untouched

// Parameter pertama start, parameter kedua deleteCount (hapus berapa)
names.splice(0, 2, 'Olla')
console.log(names)
