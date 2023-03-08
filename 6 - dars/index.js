const user = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";
delete user.name;

//-----------------------------------------------------------------------------------------

let schedule = {};

function isEmpty(obj) {
  let key = Object.keys(obj).length;

  if (key) return false;
  else return true;
}
console.log(isEmpty(schedule));

//-----------------------------------------------------------------------------------------

//Eng kop maosh oladiganini aniqlang?

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function getMaxManey(obj) {
  let arr = Object.values(obj);
  return Math.max(...arr);
}
console.log(getMaxManey(salaries));

//------------------------------------------------------------------------------------------
