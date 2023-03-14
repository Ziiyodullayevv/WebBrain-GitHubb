// Istalgan sonni binary korinshigan otqazib nechta nol va 1 qatnashganini aniqlang?

function getBinary(num) {
  let binary = num.toString(2).split("");
  let birnaryOne = binary.filter((value) => value == 1);
  let birnaryZero = binary.filter((value) => value == 0);
  return `1 dan ${birnaryOne.length} qatnashgan, 0 dan ${birnaryZero.length}ta qatnashgan`;
}
console.log(getBinary(5));

// ------------------------------------------------------------------------

// berilgan sonlar ichidan eng katta va eng kihik sonlar ayirmasini toping. Manfiy son chiqmasligi kerak.

let num = [1, 4, 6, 7, 9];

function getMinMaxTotal(num) {
  let min = Math.min(...num);
  let max = Math.max(...num);
  return Math.abs(min - max);
}
// console.log(getMinMaxTotal(num));

// -------------------------------------------------------------------------

// Math ning trunc vs floor vs ceil, parseInt lar bilan farqini tushintirib bering?

// Math.floor va Math.ceil --> floor kasr sonning qiymatini pastga qarab yahlitlaydi, ceil esa aksincha yuqoriga qarab yahlitlarydi.

// Misollar:

let floor1 = Math.floor(2.99); // 2;
let floor2 = Math.floor(-2.99); // -3;

let ceil1 = Math.ceil(2.99); // 3;
let ceil2 = Math.ceil(-2.99); // -2;

// Math.trunc bir qarashda floor bilan bir xil ish bajarib beradiganga oxshaydi, Lekin farqi bor. Math.trunc shunchaki sonning kasr qismini tashlab yuboradi. Math.floor esa sonni kamayish tartibida yaxlitlab beradi

// Misol:

let trunc = Math.trunc(-2.99); // -2;
let floor = Math.floor(-2.99); // -3;

// parseInt sonning butun qismini olib beradi, kasr qismini tashlab yuboradi, huddi Math.trunc kabi lekin farqi bor parseInt malumotlarni stringga ogirish uchun ham xizmat qiladi. Math.trunc esa faqat number typedagi malumotlar bilan ishlatish mumkin.

// Misollar:

let parse = parseInt("2.9a9"); // 2;
let truncValue = Math.trunc("2.9a9"); // NaN

// randomIntiger(min, max) function yozilsin, min max oraligidagi random raqamni chiqarib bersin.

function randomIntiger(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}
console.log(randomIntiger(5, 10));

// -----------------------------------------------------------------------
