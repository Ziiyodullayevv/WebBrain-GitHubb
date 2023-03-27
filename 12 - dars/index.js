// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1 - Masala:
// Berilgan stringda nechta katta harf va nechta kichik harf borligini aniqlang ?

let str1 = "Webbrain Academy";
const getStr = (str) => {
  let large = 0;
  let lower = 0;

  for (v of str) {
    if (v === v.toUpperCase() && v !== " ") large += v.length;
    else if (v === v.toLowerCase() && v !== " ") lower += v.length;
  }

  let res = `Katta harflar soni: ${large} ta, kichik harflar soni: ${lower} ta`;
  return res;
};
// console.log(getStr(str1));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2 - Masala:
// Berilgan stringdagi @ chani a harfiga o'zgartiring ?
// replaceAll va //g dan foydalanish mumkin emas!!!

let str2 = "webbr@in ac@demy";
const getAt = (str) => {
  let res = "";
  for (value of str) {
    if (value === "@") res += value = "a";
    else res += value;
  }
  return res;
};
// console.log(getAt(str2));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3 - Masala:
// Dublicate bolgan harflarni ochiring ?

let str3 = "weeebbbbbbbrrrrraaaiiiiinn";

const getDoubleCate = (str) => {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === str[i]);
    else res += str[i];
  }

  return res;
};
// console.log(getDoubleCate(str3));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 4 - Masala:
// String ichidagi raqamlarni aniqlang ?

let str4 = "Web44barin Aca48demy";

const getNum = (str) => {
  let res = "";

  for (value of str) {
    if (+value) res += value;
  }

  return +res;
};
// console.log(getNum(str4));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 5 - Masala:
// String berilgan stringning har bir belgisini 2marta takrorlang ?

let str5 = "Webbrain";

const getDoubleStr = (str) => {
  let res = "";

  for (value of str) {
    res += value + value;
  }

  return res;
};
console.log(getDoubleStr(str5));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
