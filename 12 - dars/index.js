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

  for (value of str) {
    if (+value) res += value;
  }

  return +res;
};

  // 7 - Masala:
  // Berilgan stringdagi harflar soni bir biriga teng yoki teng emasligini aniqlang. Tartib muhim emas.
  
  let str7a = "web";
  let str7b = "ewb";
  
  const getAmount = (str1, str2) => {
    let a = str1
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
  
    let b = str2
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
  
    return a === b;
  };
  // console.log(getAmount(str7a, str7b));

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


// 7 - Masala:
// Berilgan stringdagi harflar soni bir biriga teng yoki teng emasligini aniqlang. Tartib muhim emas.

let str7a = "web";
let str7b = "ewb";

const getAmount = (str1, str2) => {
  let a = str1
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");

  let b = str2
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");

  return a === b;
};
// console.log(getAmount(str7a, str7b));

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
// console.log(getObjAgeTotal(obj2));

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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ----------------------- Array Boyicha Masalalar:

// 1 - Masala:
//Array ichidagi doublikat sonlarni chiqarib yuboring? new Setsiz!

let arr1 = [2, 2, 2, 2, 4, 4, 4, 5, 6, 7];

const getDoublicateArr = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) res.push(arr[i]);
  }
  return res;
};
// console.log(getDoublicateArr(arr1));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2 - Masala:
// Arraylarni bir-biriga taqqoslang?

let arr2 = [1, 2, 3];
let arr3 = [1, 2, 3];

const getComporasionArr = (arr1, arr2) => {
  let oneArr = arr1.join("");
  let twoArr = arr2.join("");

  return oneArr === twoArr;
};
// console.log(getComporasionArr(arr2, arr3));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3 - Masala:
// Array ichidagi ikki honali sonlarni chiqaring ?

let arr4 = [1, 65, 4, 67, 567];

const getTwoRoom = (arr) => {
  let res = [];
  let strArr = arr.join(" ").split(" ");

  for (value of strArr) {
    if (value.length === 2) res.push(+value);
  }
  return res;
};
// console.log(getTwoRoom(arr4));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// -------------------------- Advenced Homeworks:
// [2,3,2,4,5,2,3]
// [2,3,2,1,2,3]
// [2,2,1,2]
// [1,2]
// [1]
// Berilgan Array shu korinishda chiqishi kerak ?

let arr5 = [2, 3, 2, 4, 5, 2, 3];

const arrTwoMax = (arr) => {
  for (value of arr) {
    let sortArr = arr.sort((a, b) => a - b);
    let max = sortArr.pop() - sortArr.pop();

    sortArr.push(max);

    let total = sortArr.filter((value) => value);
    console.log(total);
  }
};
arrTwoMax(arr5);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let num = 5766;
console.log(num.toString(2));

const getBinary = (num) => {
  biniry = '000110010';
  let count = 0;
  let res = 0;
  let isStartCount = false;

  for (value of biniry) {
    if (value == "1") {
      res = count > res ? count : res;
      count = 0;
      isStartCount = true;
    } else if (isStartCount) {
      count++;
    }
  }
  return res;
};
console.log(getBinary(num));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


let array = [2, 4, 5, 3, 1,0];

function processArray(arr) {
  while (arr.length >= 2) {
    // Arraydagi eng katta 2 ta sonni topish
    let sortedArr = [...arr].sort((a, b) => b - a);
    let max1 = sortedArr[0];
    let max2 = sortedArr[1];

    // Ularning ayirmasini hisoblash
    let getminus = max1 - max2;

    // Eng katta 2 ta sonni arraydan olib tashlash
    arr = arr.filter((element) => element !== max1 && element !== max2);

    // Ayirmasini arrayga qo'shish;
    if(getminus !== 0) {
      arr.push(getminus)
    }
    console.log(arr.filter(value => value));
  }
}
processArray(array);