// //1st assignment
function calculateMoney(InAday) {
  if (InAday < 0) {
    return "invalid number";
  }
  const perTicketSell = 120;
  const perJenitorCost = 500;
  const totalStaff = 8;
  const lunchCostPerStaff = 50;

  const InADayCost = InAday * perTicketSell;
  const DailyStaffCost = totalStaff * lunchCostPerStaff;
  const totalDailyCost = perJenitorCost + DailyStaffCost;
  const moneyLeft = InADayCost - totalDailyCost;

  return moneyLeft;
}
let InAday = -133;
const finalMoneyLeft = calculateMoney(InAday);
console.log("money left : ", finalMoneyLeft);

//2nd assignement

function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid ";
  }
  let lastLetter = name[name.length - 1];
  if (
    lastLetter === "a" ||
    lastLetter === "A" ||
    lastLetter === "y" ||
    lastLetter === "Y" ||
    lastLetter === "i" ||
    lastLetter === "I" ||
    lastLetter === "e" ||
    lastLetter === "E" ||
    lastLetter === "o" ||
    lastLetter === "O" ||
    lastLetter === "u" ||
    lastLetter === "U" ||
    lastLetter === "w" ||
    lastLetter === "W"
  ) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}
let name1 = 100;
console.log(checkName(name1));

//3rd Assignement

function deleteInvalids(array) {
  const uniqueArray = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && !isNaN(array[i])) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

const array1 = [NaN, 1, 12, 0, -1, undefined];
console.log(deleteInvalids(array1));

//fouth assignment
const testObject = {
  name: "kolimuddin",
  birthYear: 1990,
  siteName: "google",
};
function password(obj) {
  if (obj.birthYear.toString().length < 4 || obj.siteName == null) {
    return "Invalid";
  }
  if (
    obj.hasOwnProperty("siteName") == false ||
    obj.hasOwnProperty("birthYear") == false ||
    obj.hasOwnProperty("name") == false
  ) {
    return "invalid";
  }

  return (
    obj.siteName[0].toUpperCase() +
    obj.siteName.slice(1) +
    "#" +
    obj.name +
    "@" +
    obj.birthYear
  );
}

const result = password(testObject);
console.log(result);

//fifth problem

function monthlySavings() {}
