let browser = 'Edge'
switch(browser) {
    case 'Edge':
        console.log("You've got the Edge"); //Edge berilsa ishlaydi 
    break;

    case 'Chrome':
    case 'FireFox':
    case 'Safari':
    case 'Opera':
        console.log('Okay we support these brwsers too');// shu shartga birortasi mos kelsa ham ishlaydi

    break;

    default: 
        console.log('We hope that this page looks ok!');// har ikkala shart qanoatlantirmagan holatda bajariladi
} 

// __________________________________________________________________________________________

let a = 2;

if (a == 0)  console.log(0);// variable qachonki 0 ga teng bolsa 0;
if (a == 1)  console.log(1);// variable qachonki 1 ga teng bolsa 1;
if (a == 2 || a == 3) console.log('2,3');// variable qachongi 2 yoki 3 ga teng bolsa '2,3' chiqadi. Hech biriga togri kelmasa hech qanday javob chiqmaydi

//____________________________________________________________________________________________

// Prime numberlarni toping? 
// Yani 1ga va oziga bolinadigan sonlar

let num = 10;

for (let i = 2; i <= num; i++) {
    let tubSon = true;

    for (let j = 2; j < i; j++) {
        if(i % j == 0) {
            tubSon = false;
        }
    }
    
    if (tubSon) {
        console.log(i);
    }
}

// ____________________________________________________________________________________________

let karra = 9;

for(let i = 2; i <= karra; i++) {
    console.log('');
    console.log(`${i} karra jadvali`);
    console.log('');

    for(let j = 1; j <= 10; j++ ) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}






