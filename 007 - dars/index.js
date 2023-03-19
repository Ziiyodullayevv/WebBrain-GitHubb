let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    console.log(this.step);
  },
};

// let funct = ladder.up().up().down().showStep();
// console.log(funct);
// bu yerda error beradi chunki obekt ichiga kirb biryopmiz va ushbu korsatilgan qiymatlar yoq

// ------------------------------------------------------------------------

function getName() {
  return new.target;
}

function surName() {
  return getName;
}

let a = getName();
let b = surName();
console.log(a === b);
