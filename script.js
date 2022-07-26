const minerals = [
  { gem: "Vesuvianit" },
  { gem: "Watermelon Tourmaline" },
  { gem: "Willemite" },
  { gem: "Zincite" },
  { gem: "Zircon" },
  { gem: "Zoisite" },
  { gem: "Zultanite" },
];
const stones = [
  { stone: "granite" },
  { stone: "obsidion" },
  { stone: "marbel" },
  { stone: "concrete" },
  { stone: "quartz" },
  { stone: "talc" },
  { stone: "river-rock" },
];

function gems() {
  let searchinput = document.querySelector(".text");
  // let gemsarr = minerals.gem;
  for (let i = 0; i < minerals.length; i++) {
    searchinput.innerText = String(minerals[i]);
    console.log(minerals[i]);
  }
}
function stone() {
  let searchinput = document.querySelector("stones");
  let stonearr = stones.stone;
}
function all() {
  let searchinput = document.querySelector("all");
  let gemsandstonesarr = stones.stone + gems.gem;
}
