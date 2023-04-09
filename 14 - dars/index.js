let company = {
    sales: [
        {name: "John", salary: 1},
        {name: "Alice", salary: 2}
    ],
    development: {
        sites: [
            {name: 'Peter', salary: 3},
            {name: 'Alex', salary: 2}
        ],
        internals: [
            {name: 'Jack', salary: 5},
            {name: 'Anna', salary: 1}
        ]
    }
};

function getCalc(data) {
    if(Array.isArray(data)) {
        return data.reduce((total, value) => total + value.salary, 0)
    } else {
        let sum = 0;

        for(let value of Object.values(data)) {
            console.log(value);
            sum += getCalc(value);
        }
        return sum;
    }
}
console.log(getCalc(company));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// JavaScript Marafon

// JavaScript bilim darajangizni sinab ko'rish uchun ajoyib imkoniyat!
// Eslatma: Albatta bu Webbrain Academy talabalarini darajaga ajratish sistemasi va bu faqatgina JavaScript bilimi uchun, frontend dasturchi sifatida baholash uchun emas. Agar holis bilimingizni tekshirmoqchi bo'lsangiz o'zingiz uchun ikki soat vaqt belgilang va hechnimadan foydalanmasdan bilimingizni sinab ko'ring. Agar siz 100baldan kam to'plasangiz biling sizda JavaScriptdan katta kamchilik mavjud.
// To'plangan natijalar hulosasi: 
// New Commer — 0%~ 29%
// Beginner — 30%~ 49%
// Junior — 50%~ 59%
// Strong junior - 60% ~ 69%
// Middle - 70% ~ 79%
// Strong Middle - 80% ~ 89%
// Senior - 90% ~100% 
// Har bir savolning o'zini bali vajud. Ularning yig'indisi 164 bal. Yani eng yuqori ball 164.
// 1 — Savol (3 bal)
// Primitive va non-primitive data type’larining farqlari nimada va ular qanday malumot(data) turlarini o’z ichiga oladi?
// 2 — Savol (6 bal)
// Quyidagi consolelardan qanday javoblar chiqadi?

// 3 — Savol (6 bal)
// Quyidagi console dan qanday javob chiqadi?

// 4 — Savol (6 bal)
// Quyidagi consolelardan qanday javoblar chiqadi.

// 5 — Savol (3 bal)
// Lexical environment nima? qachon va qay holatda bo’ladi? misollar keltiring.
// 6 — Savol (3 bal)
// Garbage collection nima? Misollar bilan tushuntirib bering.
// 7 — Savol (4 bal)
// Object.assgin() va structuredClone() nima? ular orasidagi farq haqida malumot bering.
// 8 — Savol (6 bal)
// Beshinchi qatordagi code’da, user.name va user.surname qaysi holatlarda error(xato) javob qaytaradi? Nega bu holat “yomon code” deb aytiladi. Errorni oldini olish uchun nimalar qilish kerak?

// 9 — Savol (3 bal)
// Objectlarda optional chaining nima? Misollar bilan tushuntirib bering.
// 10 — Savol (3 bal)
// Arrayda flat() va flatMap() metodi nima vazifa bajaradi? Misollar orqali tushuntirib bering.
// 11 — Savol (4 bal)
// Arrayda Array.from() va fromEntries() nima? Misollar bilan tushuntirib bering.
// 12 — Savol (3 bal)
// JSON.parse() / JSON.stringify()— metodlarining parametorlari haqida malumot bering. Misollar orqali tushuntirib bering.
// 13 — Savol (6 bal)
// new Set va new WeakSet nima va ularning farqi - 3 bal
// new Map va new WeakMap nima va ularning farqi nima? - 3 bal
// 14 — Savol (5 bal)
// User objectini barcha(nested ham) keylarini destructure qiling. Destructure qilish vaqtida key nomiga yangi nom berishingiz mumkin.

// 15 — Savol (3 bal)
// Closure nima?
// 16 — Savol (4 bal)
// IIFE function va NFE functionlar qanday functionlar va qachon ishlatiladi?
// 17 — Savol (4 bal)
// Functionlarda apply, call, bind nima va bir birdan farqi haqida malumot bering.
// 18 — Savol (6 bal)
// Classda static variable va static functionlar nima va qanday yoziladi?
// Syntax explanation  - 2 bal
// Static variable va functionlarni misollar bilan tushuntirish - 4 bal
// 19 — Savol (3 bal)
// JavaScript DOM’da orqali div elementiga qo’shimcha list nomli classname qo'shing.

// 20 — Savol (5 bal)
// Quyidagi codedan qanday natija chiqadi?

// 21 — Savol (4 bal)
// Stringda includes, search, indexOf metodlarini bir biridan farqi nimada?
// 22 — Savol (8 bal)
// new Proxy nima va uning to’rtta metodlari haqida malumot bering?
// 23 — Savol (8 bal)
// DOM Range va Selection nima va nimaga ishlatiladi? Property’lari haqida malumot bering.
// 24 — Savol (8 bal)
// new ArrayBuffer va new Blob nima va farqlari haqida malumot bering?
// 25 — Savol (6 bal)
// new URL() va SearchParams nima va qachon ishlatiladi?
// 26 — Savol (8 bal)
// Cookie metodlari va flaglari haqida malumot bering?
// 27 — Savol (6 bal)
// new Websocket qanday ishlaydi. socket ulanganligini qanday tekshirsa bo’ladi?
// 28 — Savol (15 bal)
// indexedDB orqali quyidagi malumotlar omborini yasang:
// frontend nomli Object Store yasang
// transaction orqali reactjs, angularjs, vuejs darsliklarini ihtiyoriy narhi bialn frontend omboriga  joylang. Ex: {reactjs: 120, vuejs: 100}
// createIndex orqali malumotlarni range bilan filter qiling.
// 29 — Savol (15 bal)
// Sizga quyidagi ko’rinishda Webbraindagi o’quv kurslarining narhlari haqida malumot beriladi. Ushbu malumotga istalganicha boshqa yo’nalishlar qo’shilishi mumkin. Recursion function orqali barcha kurs narhini hisoblang.

// 30 — Savol (4 bal)
// Quyidagi linkdan protocol, pathname, hostname, search, port, hash’larni ajrating.
// https://webbrain.uz:8080/about/desc?about=bestitcenter&nmae=webbrain
