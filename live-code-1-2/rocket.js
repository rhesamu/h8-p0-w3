/*
Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row, dan akan menampilkan x ke samping di baris ganjil, dan o di baris genap. Function drawLadder tidak perlu me-return apapun.
Function tidak perlu mengembalikan nilai (tidak perlu ada return).

Contoh 1
--------
input: 3
tampilan:
x
oo
xxx

Contoh 2
--------
input: 6
tampilan:
x
oo
xxx
oooo
xxxxx
oooooo

*/

function drawLadder(row) {
  // hanya code disini
  var x = '';
  var o = '';
  for (var i = 1; i <= row; i++) {
    for (var j = i - 1; j < i; j++) {
      x = x + 'x';
      o = o + 'o';
    }
    if (i % 2 !== 0) {
      console.log(x);
    }
    else {
      console.log(o);
    }
  }
}

drawLadder(6);
drawLadder(3);

function drawLadder2(row) {
  for (var i = 1; i <= row; i++) {
    var str = '';
    for (var j = 1; j <= i; j++) {
      if (i % 2 === 0) {
        str = str + 'o';
      }
      else {
        str = str + 'x'
      }
    }
    console.log(str);
  }
}
