// Homework

// 1) check(str1, str2) funksiya yozilsin. Berilgan parametorlar bir-biriga mos yoki umuman mos kelmasligi va qisman mos ekanligini ifodalovchi natija qaytarsin

function check(str1, str2) {
  if (str1 === str2) return "100% teng";
  else if (str1.includes(str2)) return "Qisman teng";
  else return "Mutlaqo teng emas";
}
// console.log(check("webbrain", "webbrain"));

// -------------------------------------------------------------------------

// 2) getCount(str) - function yozilsin. function str dagi harflar sanogini chiqarib bering?
// Chiqishi str = 'webbrain'; --> { w:1, e:1, b:2, r:1, a:1, i:1, n: 1 };

const getCount = (str) => {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    count[str[i]] ? count[str[i]]++ : (count[str[i]] = 1);
  }
  return count;
};
// console.log(getCount("webbrain"));

// -------------------------------------------------------------------------

// 3) truncate(str, n) - function yozilsin. Berilgan stringdan n ta harf ajratib chiqarib bersin!

const truncate = (str, n) => {
  return str.slice(0, n);
};
// console.log(truncate("webbrain academy", 5));

// -------------------------------------------------------------------------

// 4) getCurrent(str) berilgan pul birligidan faqat raqamlarini ajrating. eslatma pul birliklari turlicha bolishi mumkin va ular faqat soz boshida yoki sozning oxirida keladi.

const getCurrent = (str) => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] === "$")) res += str[i];
    else "not found";
  }
  return +res;
};
// console.log(getCurrent('1200')); // xatoo

// -------------------------------------------------------------------------

// 5)

// -------------------------------------------------------------------------

// 6) capitilize(str) --> Berilgan stringdagi barcha sozlarni Barchasining birinchi harfini bosh harf bilan yozish kerak?

const capitilize = (str) => {
  let res = "";
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    res += " " + arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return res.trim();
};
// console.log(capitilize("hello world"));

// =========

// 7) 'webbrain' kabi istalgan matn berilgan bolsa uni 'wweebbbbrraaiinn' korinishida chiqaring.

function double(str) {
  let res = "";
  for (value of str) {
    res += value + value;
  }
  return res;
}
// console.log(double("web"));

// ---------------------------------------------------------------------

// 8) berilgan soz palendrom yoki palendrom emasligini aniqlovchi function tuzish kerak

const polendrom = (str) => {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res === str;
};
// console.log(polendrom("nonun"));

// ----------------------------------------------------------------------

// 9) string berilgan uni ziplash kerak?
// Chiqishi: 'weeebbbrain academyyyy' --> 'we3b3rain academy4'

const getZipper = (str) => {
  let count = {};
  for (value of str) {
  }
  return;
};
console.log(getZipper("webbrain"));
