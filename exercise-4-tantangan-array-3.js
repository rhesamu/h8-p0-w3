/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * [1989, 21, 05]
 * 21-05-1989
 * Roman Alamsyah
 */
function dataHandling2(dataInput) {
  dataInput.splice(1, 1, "Roman Alamsyah Elsharawy");
  dataInput.splice(2, 1, "Provinsi Bandar Lampung");
  dataInput.splice((dataInput.length), 0, "SMA Internasional Metro")
  console.log(dataInput);

  var inputDate = dataInput[3].split("/");

  var inputMonth = inputDate[1];
  switch(inputMonth) {
    case '05': { console.log("Mei"); break; }
    default: { console.log("Invalid"); break; }
  }

  inputDate.sort(function(value1, value2) { return value1 < value2 });
  console.log(inputDate[0] + '-' + inputDate[1] + '-' + inputDate[2]);

  var inputName = dataInput[1].slice(0, 15)
  console.log(inputName)
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
