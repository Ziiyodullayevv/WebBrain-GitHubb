// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1 - Masala:
// Berilgan stringda nechta katta harf va nechta kichik harf borligini aniqlang ?

let str1 = "Webbrain Academy";

const getDouble = (str) => {
  let res = "";

  for (value of str) {
    res += value + value;
  }

  return res;
};
// console.log(getDouble(str1));

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
