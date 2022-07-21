const Minerals = [
  { gem: "Diamond", hardness: 1 },
  { gem: "Ruby", hardness: 2 },
  { gem: "Sapphire", hardness: 3 },
  { gem: "Emerald", hardness: 4 },
  { gem: "Amathyst", hardness: 5 },
  { gem: "Amber", hardness: 6 },
  { metal: "Iron", hardness: 7 },
  { metal: "Steel", hardness: 8 },
  { metal: "Nickel", hardness: 9 },
  { metal: "Tin", hardness: 10 },
  { metal: "Gold", hardness: 11 },
];
var results = [];

let keys = document.getElementById("searchinput");
let searchbutton = document.getElementById("searchbutton");
searchbutton.addEventListener("click", filterIt);
function filterIt(arr, searchKey) {
  Minerals = arr;
  keys = searchKey;
  return arr.filter((obj) =>
    Object.keys(obj).some((key) => obj[key].includes(searchKey))
  );
}

// const numbers = {
//   hardness: 11,
//   hardness: 29,
//   hardness: 1,
//   hardness: 13,
//   hardness: 497,
// };
// document.innerHTML = numbers;

// function checkKey() {
//   if (
//     numbers.toString().includes(document.getElementById("searchinput")) ===
//     false
//   ) {
//     alert(keys.value + " Not Found");
//   } else {
//     alert(numbers.indexOf(Number(keys.value)) + " is in the array");
//   }
// }

// checkKey(numbers, "hardness"); // Return true
