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

const numbers = {
  hardness: 11,
  hardness: 29,
  hardness: 1,
  hardness: 13,
  hardness: 497,
};
document.innerHTML = numbers;
let keys = document.getElementById("searchinput");
let but = document.getElementById("search");
but.addEventListener("click", checkKey);

function checkKey() {
  if (
    numbers.toString().includes(document.getElementById("searchinput")) ===
    false
  ) {
    alert(keys.value + " Not Found");
  } else {
    alert(numbers.indexOf(Number(keys.value)) + " is in the array");
  }
}

// checkKey(numbers, "hardness"); // Return true
