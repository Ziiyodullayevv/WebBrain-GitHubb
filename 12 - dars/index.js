// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// -------------------- String Boyicha Masalalar :

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
// console.log(getDoubleStr(str5));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 6 - masala:
// Berilgan soz palendrom yoki palendrom emasligini aniqlang ?

let str6 = "kiyik";

const getPolendrom = (str) => {
  let polindrom = str.split("").reverse().join("");
  return polindrom === str;
};
// console.log(getPolendrom(str6))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 8 - Masala:
// Stringda qatnashgan belgilar sanogini toping ?

let str8 = "webbrain academy";

const getStrCharNum = (str) => {
  let res = {};

  for (value of str) {
    res[value] ? res[value]++ : (res[value] = 1);
  }

  return res;
};
// console.log(getStrCharNum(str8));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 9 - Masala:
// Stringni ziplang?

let str9 = "webbraaain Accaaademyyyy";

const strZipper = (str) => {
  let res = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) count++;
    else {
      res += str[i];
      if (count > 1) {
        res += count;
        count = 1;
      }
    }
  }

  return res;
};
// console.log(strZipper(str9));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// -------------------- Object Boyicha Masalalar:

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1 - Masala:
// Object keylarini toping ?

let obj1 = { title: "Webbrain", age: 2 };

const getObjKeys = (obj) => {
  for (key in obj) {
    console.log(key);
  }
};

// console.log(getObjKeys(obj1));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2 - Masala:
// Ojbect ichidagi agelar yigindisini toping ?

let obj2 = {
  title: "Webbrain",
  age: 2,
  child: {
    age: 4,
    name: "Webbrain",
    child: {
      age: 23,
    },
  },
};

const getObjAgeTotal = (obj) => {
  let res = 0;

  while (obj) {
    res += obj.age;
    obj = obj.child;
  }

  return res;
};
console.log(getObjAgeTotal(obj2));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3 - Masala:
// Object ichidagi Boolean tipidagi malumotlarni chiqaring keylari bilan birga?

let obj = {
  id: 1,
  name: "webbrain",
  offline: true,
  online: true,
  individual: false,
};

const getBoolean = (obj) => {
  let res = ``;
  for (key in obj) {
    if (typeof obj[key] === "boolean") res += ` ${key} : ${obj[key]}; `;
  }
  return res;
};
// console.log(getBoolean(obj));
