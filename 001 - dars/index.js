// String 

let name = 'Ilya';

console.log(`hello ${1}`); // hello 1 chiqadi string typeda
console.log(`hello ${"name"}`); //helo name chiqadi stringga ogiradi
console.log(`hello ${name}`); // hello Ilya chiqadi variableni ( ``) oqiy oladi

// Prefix and Postfix

let a = 1, b = 1;

let c = ++a; // 2 chiqadi
let d = b++; // 1 chiqadi chunki js single thread

// Assinment result

let k = 2;
let x = 1 + (k *= 2) // 5 chiqadi huddi matimatikadagidek ishlaydi