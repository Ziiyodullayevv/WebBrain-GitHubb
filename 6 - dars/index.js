// 1 - KATA:
//user nomli obekt yarating unga name degan key va "John" degan value; surname degan key va "Smith" degan value bering. keyin name ni qimatini "Pete"ga ozgartiring song name ni ochirib tashlang.

const user = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";
delete user.name;

// console.log(user);

//-----------------------------------------------------------------------------------------

// 2 - KATA:
// isEmpy degan fuksiya bor shu funksiyaga obekt berilgan da uni ichi bosh bolsa true, aks holda false degan qiymatlarni qaytarsin ?

let schedule = {};

function isEmpty(obj) {
  let key = Object.keys(obj).length;

  if (key) return false;
  else return true;
}
// console.log(isEmpty(schedule));

//-----------------------------------------------------------------------------------------

// 3 - KATA:
// “Bizda jamoamizning maoshlarini saqlaydigan ob'ektimiz bor: maoshlar = {John: 100, Ann: 130, Pit: 160} uchun hech qanday natija yo'q. barcha maoshlarni yig'ish uchun kodni yozing va o'zgaruvchan summada saqlang. Yuqoridagi misolda 390 bo'lishi kerak. Agar maoshlar bo'sh bo'lsa, natija 0 bo'lishi kerak.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function getMoney(obj) {
  let result = 0;
  for (let key in obj) {
    if (Object.keys(obj).length) result += obj[key];
    else return 0;
  }
  return result;
}
console.log(getMoney(salaries));
//------------------------------------------------------------------------------------------

// 4 - KATA:
// menu degan obekt berilgan obektning ichidagi number typeda bolgan malumotlarning qiymatini 2 ga kopaytiring ?

let menu = {
  width: 200,
  height: 200,
  title: "My menu",
};

function getMenu(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}
// getMenu(menu);

// console.log(menu);

//---------------------------------------------------------------------------------------------

// 5 - KATA:
// Object keylarini chiqaring?
// chiqish;
// id, name;
let obj1 = {
  id: 1,
  name: "WebBrain",
};

for (let key in obj1) {
  // console.log(obj[key]);
}

// -----------------------------------------------------------------------------------------

// 6 - KATA:
// object valuelarining raqamga tenglarini toping ?
// chiqish
// id

let obj2 = {
  id: 1,
  name: "WebBrain",
};

for (let key in obj2) {
  if (typeof obj2[key] === "number") {
    // console.log(key);
  } else return 0;
}

// ---------------------------------------------------------------------------------------

// 7 - KATA:
// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga ?

// chiqish
// {   offline:true,
//     online:true,
//     individual:false
// }

let obj3 = {
  id: 1,
  name: "WebBrain",
  offline: true,
  online: true,
  individual: false,
};

for (let key in obj3) {
  if (typeof obj3[key] === "boolean") {
    // console.log({ [key]: obj3[key] });
  } else console.log();
}
