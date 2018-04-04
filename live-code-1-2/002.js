// Competencies: Conditional

/*
==============
Shop Till Drop
==============
Instruksi
---------
Bu Tini sedang berbelanja di supermarket menggunakan debit card dengan sejumlah saldo.
Apa yang ia belanjakan menyesuaikan dengan beberapa kondisi:
Jika debit card tidak bernama (nama kosong), maka tampilkan di log "Tidak bisa belanja. Pulang lagi deh." Kemudian, hentikan program.
Jika saldo debit card dibawah 10.000, maka tampilkan di log "Tidak bisa belanja. Saldo minimal 10.000.". Kemudian, hentikan program.
Setelah saldo mencukupi, ibu Tini dihadapkan pilihan untuk membeli jenis daging sesuai uang yang tersedia:
- Jika saldo debit minimal 200.000, maka bu Tini akan membeli daging sapi. Ubah nilai shoppingBag dengan "Beef", dan kurangi saldo dengan nilai 200000.
- Jika saldo debit minimal 100.000 (dan dibawah 200.000), bu Tini akan membeli daging ikan. Ubah nilai ShoppingBag dengan "Fish", dan kurangi saldo dengan nilai 100000.
- Jika saldo debit minimal 50.000 (dan dibawah 100.000), bu Tini akan membeli daging ayam. Ubah nilai ShoppingBag dengan "Chicken", dan kurangi saldo dengan nilai 50000.
- Jika saldo tidak memenuhi untuk pembelian ketiga nya, maka bu Tini akan membeli indomie. Ubah nilai ShoppingBag dengan "Indomie", dan kurangi saldo dengan nilai 10000.
Di akhir program, tampilkan di log "Ibu Tini membeli <nilai Shopping Bag> dan sisa uang: <nilai sisa saldo>"
*/

var debitCardName; // nama debit card, isi sendiri
var debitCardAmount; // saldo debit card, isi sendiri

var shoppingBag;
var displayMessage = "Ibu Tini membeli " + shoppingBag + " dan sisa uang: " + debitCardAmount;

// buat kode disini!

// if name is empty, "Tidak bisa belanja. Pulang lagi deh."
if (debitCardName === '' || debitCardName === undefined) {
  console.log("Tidak bisa belanja. Pulang lagi deh.");
} else {
  if (debitCardAmount === undefined || debitCardAmount < 10000) {
    console.log("Tidak bisa belanja. Saldo minimal 10.000.");
  }
  else if (debitCardAmount < 50000) {
    shoppingBag = "Indomie";
    debitCardAmount = debitCardAmount - 10000;
  }
  else if (debitCardAmount >= 50000 && debitCardAmount < 100000) {
    shoppingBag = "Chicken";
    debitCardAmount = debitCardAmount - 50000;
  }
  else if (debitCardAmount >= 100000 && debitCardAmount < 200000) {
    shoppingBag = "Fish";
    debitCardAmount = debitCardAmount - 100000;
  }
  else if (debitCardAmount >= 200000) {
    shoppingBag = "Beef";
    debitCardAmount = debitCardAmount - 200000;
  }
}
