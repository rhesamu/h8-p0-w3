/**
Interesting Square
------------------
Buatlah sebuah proses perulangan menggunakan looping/perulangan
(boleh menggunakan while / for)
Disediakan variable height, gunakan variable ini untuk
mengatur tinggi dari persegi yang akan kita buat.

Contoh:
  - height: 3
  - output:
    ***
    ###
    ***

  - height: 1
  - output:
    *

  - height: 5
  - output:
    *****
    #####
    *****
    #####
    *****

Tinggi dan lebar dari persegi sesuai dari variable height
*/

var height = 2;
var stars = '';
var hashes = '';

for (var i = 0; i < height; i++) {
  stars = stars + '*';
  hashes = hashes + '#';
}

for (var j = 0; j < height; j++) {
  if(j % 2 === 0) {
    console.log(stars);
  }
  else {
    console.log(hashes);
  }
}
