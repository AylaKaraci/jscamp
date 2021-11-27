// #region Asal Sayı
//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
// (Araştırma konusu : şart blokları : if )
console.log("Asal Sayılar");

function findPrime(...numbers) {
  let counter;
  for (let i = 0; i < numbers.length; i++) {
    counter = 0;
    for (let j = 1; j <= numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        counter++;
      }
    }
    if (counter == 2) {
      console.log(numbers[i], "asal sayıdır");
    }
  }
}
findPrime(1, 3, 5,7, 21,41,13);
// #endregion

// #region Arkadaş Sayılar
const friendNumber1 = 220
const friendNumber2 = 284

let total1 = 0
let total2 = 0

const isFriend = (s1,s2) => {
for (let index = 0; index < s1; index++) {
  if (friendNumber1 % index == 0) {
    total1 += index
  }
  console.log(total1)
}
for (let index = 0; index < s2; index++) {
  if (friendNumber2 % index == 0) {
    total2 += index
  }
  
console.log(total2)
}

return (total1 == s2 && total2 == s1)? "Arkadaşız" : "Arkadaş değiliz!"
}

console.log(isFriend(friendNumber1,friendNumber2))
// #endregion

// #region 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
var start = 1;
var end = 1000;
var i = 1;
var total = 0;
var flag = 0;

for(start = start; start <= end; start++)
{
 for(i = 1; i < start; i++)
 {
  if(start % i == 0)
   total += i;
 }
 if((total == start) && (start != 0))
 {
  if(flag < 1)  
  {
   document.write("Perfect numbers are: ");
   flag = 1;
  }
  document.write(start +", ");
 }
 total = 0;
}

if(flag == 0)
 document.write("There in no perfect number");
// #endregion

// #region  1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
var start = 1;
var end = 1000;
var count = 0;
var i = 1;

document.write("The prime numbers between "+start+" to "+end+":<br>");
for(start=start; start<=end; start++)
{
 for(i=1; i<=start; i++)
 {
  if(start % i == 0)
   count++;
 }
 if(count == 2)
  document.write(start +", ");
 count = 0;
}
// #endregion
