// Homework

// 1) check(str1, str2) funksiya yozilsin. Berilgan parametorlar bir-biriga mos yoki umuman mos kelmasligi va qisman mos ekanligini ifodalovchi natija qaytarsin

function check(str1, str2) {
  //   let compare = str1.localeCompare(str2);
  let compare = str1.localeCompare(str2);
  if (compare == 1) return "qisman togri";
  else if (compare == -1) return "Mutlaqo teng emas";
  else return "100% teng";
}
let compare = check("webbrain", "");
// console.log(compare);

// -------------------------------------------------------------------------

// 3) truncate(str, n) - function yozilsin. Berilgan stringdan n ta harf ajratib chiqarib bersin!

const truncate = (str, n) => {
  return str.slice(0, n);
};
// console.log(truncate("webbrain academy", 5));

// -------------------------------------------------------------------------

// 4) getCurrent(str) berilgan pul birligidan faqat raqamlarini ajrating

const getCurrent = (str) => {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] === "$")) res += str[i];
    else "not found";
  }
  return +res;
};
// console.log(getCurrent('$1200'));

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
