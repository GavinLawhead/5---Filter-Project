const numbers = [{ hardness: 11 }, { hardness: 29 }, 1, 13, 497];
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
let keys = document.getElementById("searchinput");
let but = document.getElementById("search");

function searchbar() {
  if (numbers.includes(Number(keys.value)) == false) {
    alert(keys.value + " Not Found");
  } else {
    alert(
      "mineral @ " + numbers.indexOf(Number(keys.value)) + " has that hardness"
    );
  }
}
but.addEventListener("click", searchbar);
