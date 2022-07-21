const Minerals = [
  { gem: "Diamond", hardness: 1 },
  { gem: "Ruby", hardness: 2 },
  { gem: "Sapphire", hardness: 3 },
  { gem: "Emerald", hardness: 4 },
  { gem: "Amathyst", hardness: 5 },
  { gem: "Amber", hardness: 6 },
  // { metal: "Iron", hardness: 7 },
  // { metal: "Steel", hardness: 8 },
  // { metal: "Nickel", hardness: 9 },
  // { metal: "Tin", hardness: 10 },
  // { metal: "Gold", hardness: 11 },
];
let searchinput = document.querySelector("searchinput");
// let therock = ;

function checkarray() {
  let rock = [];
  let therock = Minerals.find((rock) => rock.gem == searchinput);
  for (let i = 0; i < Minerals.length; i++) {
    rock += Minerals[i];
    console.log(Minerals[i]);
  }
  if (Minerals.find((rock) => rock.gem == searchinput)) {
    alert("this will display when the word is found");
  }
  if (searchinput != therock) {
    alert("undefined text");
  }
}
