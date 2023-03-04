//______________________________________________________________________________________
function checkAge1(age) {
  if (age > 18) {
    return true;
  } else {
    return "Did parents allow you?";
  }
}
// console.log(checkAge1(12));

// Yuqoridagi funksiya ichidagi if else orniga turnery va Or operatoridan foydalanib shart yarating?

function checkAge2(age) {
  return age > 18 ? true : "Did parents allow you?";
}
// console.log(checkAge2(12));

function checkAge3(age) {
  return age > 18 || "Did parents allow you?";
}
// console.log(checkAge3(20));

//____________________________________________________________________________________________

// a va b son berilgan ulardan eng kichigining qiymatini chiqarib beruvchi function tuzing?

function min(a, b) {
  if (a < b) return a;
  else return b;
}
// console.log(min(3, -1));

//_____________________________________________________________________________________________

// x sonni istalgan n darajaga chiqarib beradigan funksiya tuzing.

function numPow(x, n) {
  return Math.pow(x, n);
}
// console.log(numPow(5, 2));

//______________________________________________________________________________________________

let ask = function (question, yes, no) {
  if (confirm(question)) yes();
  else no();
};

console.log(
  ask(
    "Do you agree?",
    function () {
      alert("You agreed.");
    },
    function () {
      alert("You canceled the execution");
    }
  )
);
