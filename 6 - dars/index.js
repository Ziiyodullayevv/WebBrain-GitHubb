//user nomli obekt yarating unga name degan key va "John" degan value; surname degan key va "Smith" degan value bering. keyin name ni qimatini "Pete"ga ozgartiring song name ni ochirib tashlang.

const user = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";
delete user.name;

// console.log(user);

//-----------------------------------------------------------------------------------------

// isEmpy degan fuksiya bor shu funksiyaga obekt berilgan da uni ichi bosh bolsa true, aks holda false degan qiymatlarni qaytarsin ?

let schedule = {};

function isEmpty(obj) {
  let key = Object.keys(obj).length;

  if (key) return false;
  else return true;
}
// console.log(isEmpty(schedule));

//-----------------------------------------------------------------------------------------

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
getMenu(menu);

// console.log(menu);

//---------------------------------------------------------------------------------------------
