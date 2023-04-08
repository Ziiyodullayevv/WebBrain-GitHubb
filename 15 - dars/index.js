
// let sum = (n) => {
//     if(n === 1) return 1;
//     else {
//         return n *= sum(n - 1);
//     }
// }
// // console.log(sum(5));

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// const fibonacci = (n) => {
//     let fibonacci;
//     let fib = [0,1];

//     for (let i = 2; i <= n; i++) {
//         fib[i] = fib[i - 2] + fib[i - 1];

//         console.log( fib[i], i);
//         fibonacci = fib[i]
//     };

//     return fibonacci;

// };

let list = [
    {id: 1, name: "eshmat", title: 'seo'},
    {id: 2, name: 'toshmat', title: 'leo'},
    {id: 3, name: "eshmat", title: 'seo'},
    {id: 5, name: 'aqlbek', title: 'leo'},
    {id: 4, name: 'shosha', title:'leo'}
];

// Output: 

let res = {
    seo: [
        {id: 1, name: "eshmat", title: 'seo'},
        {id: 2, name: 'toshmat', title: 'leo'},
    ],
    leo: [
        {id: 2, name: 'toshmat', title: 'leo'},
        {id: 5, name: 'aqlbek', title: 'leo'},
    ]
};


