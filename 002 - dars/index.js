// Prefix and Postfix 

// let a = 1, b = 1 // bitta kalitsoz orqali elon qilishga misol
// let c = ++a; // pre increment qiymatni birga oshiradi 1ga oshadi yani natija 2 chiqadi
// let d = b++; // post increment qiymatni 1ga oshiradi faqat keyingi qatorda

// _____________________________________________________________________________________

// Assinment result

let a = 2; 
let x = 1 + (a *= 2); // natija 5 chiqadi huddi matimatikada qanday tartibda amallar bajarilsa javaSciptda ham huddi shunday;

// _____________________________________________________________________________________

// Type conversion

console.log("" + 1 + 0); // Natija "10" chiqadi stringga convert qilib qoyadi
console.log('' - 1 + 0); // -1 chiqadi -stringni numberga convert qilib oladi
console.log(true + false); // 1 chiqadi chunki false 0 ga, true 1 ga teng
console.log(6 / '3'); // 3 chunki stringni numberga convert qilib oladi
console.log('2' * '3'); // 6 chiqadi chunki string numberga convert qilib olinyabdi
console.log(4 + 5 + 'px'); // '9px' chiqadi chunki stringgacha qoshadi keyin stringga birlashtirib qoyadi
console.log('$' + 4 + 5); // "$45" chiqadi chunki birinchi string kelyabdi hammasini birlashtirib qoyadi 
console.log('4' - 2) // 2 chiqadi - da;
console.log('4px' - 2) // NaN;
console.log(' -9 ' + 5); // '-95' chiqadi bosh joyni olib tashlaydi
console.log(' -9 ' - 5); // -14 chiqadi
console.log(null + 1);  // 1
console.log(undefined + 1); // NaN
console.log('\t \n' - 2); // -2

//_____________________________________________________________________________________________

// Comporision 

console.log(5 > 4); // true chunki 5 4dan katta
console.log('apple' > 'pinceapple'); // false chunki asci tableda a dan p katta
console.log('2' > '12'); // true asci tableda 2 1dan katta 
console.log(undefined == null); // true ikkisi ham bosh
console.log(undefined === null); // false chunki data typeda farq bor
console.log(null == '\n0\n'); // false string nullga teng emas ('0' shu holatda deb qaraymiz)
console.log(null ==  0); // false chunki null 0 teng emas




