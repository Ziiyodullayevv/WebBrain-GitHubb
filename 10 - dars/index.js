// -----------------------------------------------------------------------

// 1 - Masala:
// Array ichida sonlar berilgan shu sonlarni yegindisini toping ?

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1) usul: (optimal yechim);

const getTotal1 = (arr) => {
  return eval(numArray.join("+"));
};
// console.log(getTotal1(numArray));

// 2) usul:

const getTotal2 = (arr) => {
  let res = 0;

  for (value of arr) {
    res += value;
  }
  return res;
};
// console.log(getTotal2(numArray));

// 3) usul:

const getTotal3 = (arr) => {
  return arr.reduce((total, value) => total + value, 0);
};
// console.log(getTotal3(numArray));

// 4) usul:

const getTotal4 = (arr) => {
  let res = 0;
  arr.map((value) => (res += value));
  return res;
};
// console.log(getTotal4(numArray));

// 5) usul:

const getTotal5 = (arr) => {
  let res = 0;
  arr.forEach((value) => (res += value));
  return res;
};
// console.log(getTotal5(numArray));

// --------------------------------------------------------------------

// 2 - Masala:
// ["webbrain", "academy"] - array ichidagi sozlarning har bir belgisining sanogini topish kerak. Natija object korinishida bolsin.
const arrStr = ["webbrain", "academy"];
const getChar = (arr) => {
  let res = {};
  let str = arr.join("");

  for (value of str) {
    res[value] ? res[value]++ : (res[value] = 1);
  }
  return res;
};
// console.log(getChar(arrStr));

// --------------------------------------------------------------------

// 3 - Masala
// Arrayni bir-biriga taqqoslang? Togridan togri taqqoslab bolmas ekanligini yodda tuting chunki array Obectdir!!!

const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isEqual = (arr1, arr2) => {
  return arr1.join("") === arr2.join("");
};
// console.log(isEqual(num1, num2));

// --------------------------------------------------------------------

// 4 - Masala:
//
const lowerCase = ["background-color", "-hover-effects"];
const camelize = (arr) => {
  let str = arr.join(" ");
  console.log(str);
  let res = "";
  for (key in str) {
    if (str[key - 1] === "-") res += str[key].toUpperCase();
    else res += str[key] + "";
  }
  return res.replace(/-/g, "").split(" ");
};
// console.log(camelize(lowerCase));

// --------------------------------------------------------------------

// (5) Advensed Masala:

let users = [
  { id: 1, year: 1998, engine: 1, name: "Tiger" },
  { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
  { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
  { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
  { id: 5, year: 2012, engine: 2, name: "Malibu" },
  { id: 6, year: 2000, engine: 1.2, name: "Damas" },
  { id: 7, year: 2018, engine: 2.4, name: "Aracker" },
];

// Alifbo boyicha tartiblash:

const tartiblash = (arr) => {
  let res = arr.sort((a, b) => a.name.localeCompare(b.name));
  users = res;
};
// tartiblash(users);

// -------------------------------------------------------------------

// 2000 yildan odingi mashinalar rayhatini chiqaring?

const getYearOld = (data) => {
  let res = data.filter((value) => value.year < 2000);
  users = res;
};
// getYear(users);

// ------------------------------------------------------------------

// 2010 yildan keyingi mashinalar royhatini chiqaring ?
const getYearNew = (data) => {
  let res = data.filter((value) => value.year > 2010);
  users = res;
};
// getYearNew(users);

// ------------------------------------------------------------------

// engine kuchiga qarab malumotlarni tartiblang ?

const getEngine = (data) => {
  let res = data.sort((a, b) => b.engine - a.engine);
  users = res;
};
// getEngine(users);

// -----------------------------------------------------------------

// Chiqarilgan yiliga qarab sartirovka qiling ?

const getYearSort = (data) => {
  let res = data.sort((a, b) => a.year - b.year);
  users = res;
};
// getYearSort(users);

// -----------------------------------------------------------------

// 2000 yildan oldin chiqqan mashinalarga status : eski degan malumotni qoshing ?

const setData = (data) => {
  let res = "hover";
};
setData(users);

console.log(users);
