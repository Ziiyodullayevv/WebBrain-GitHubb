
let sum = (n) => {
    if(n === 1) return 1;
    else {
        return n *= sum(n - 1);
    }
}
// console.log(sum(5));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



const fibonacci = (n) => {
    let fibonacci;
    let fib = [0, 1];

    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        fibonacci = fib[i]
    };

    return fibonacci;

}
console.log(fibonacci(7));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
