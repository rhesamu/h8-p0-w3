/**

Buatlah sebuah algoritma untuk kasus berikut:

Sebuah game memiliki hero dan hero tersebut memiliki atribut level dan damage.
Damage dari hero tergantung dari levelnya, perhitungan damage akan mengikuti aturan berikut:
- Damage Hero Level 1-15: level dikalikan 2
- Damage Hero Level 16-20: (level dikalikan 2) + 5
- Damage Hero Level 21-25: (level dikalikan 2) + 10
- Selain level yang disebutkan di atas, tampilkan "Invalid level" dan hentikan program

Lalu tampilkan damage hero berdasarkan levelnya sekarang

*/

// Your algorithm/pseudocode here

READ heroLevel
READ heroDamage

IF heroLevel >= 1 AND heroLevel <=15 THEN
  COMPUTE heroDamage AS heroLevel * 2
  DISPLAY heroDamage
ELSE IF heroLevel >= 16 AND heroLevel <=20 THEN
  COMPUTE heroDamage AS (heroLevel * 2) + 5
  DISPLAY heroDamage
ELSE IF heroLevel >= 21 AND heroLevel <= 25 THEN
  COMPUTE heroDamage AS (heroLevel * 2) + 10
  DISPLAY heroDamage
ELSE
  DISPLAY "Invalid level"
END IF
