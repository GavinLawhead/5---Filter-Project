const allarr = [
  " granite",
  " obsidion",
  " marbel",
  " concrete",
  " quartz",
  " talc",
  " river-rock",
  " Vesuvianit",
  " Watermelon Tourmaline",
  " Willemite",
  " Zincite",
  " Zircon",
  " Zoisite",
  " Zultanite",
];
const minerals = [
  " Vesuvianit",
  " Watermelon Tourmaline",
  " Willemite",
  " Zincite",
  " Zircon",
  " Zoisite",
  " Zultanite",
];
const stones = [
  " granite",
  " obsidion",
  " marbel",
  " concrete",
  " quartz",
  " talc",
  " river-rock",
];
let searchinput = document.querySelector(".text");
searchinput = "";
function all() {
  let searchinput3 = document.querySelector(".text");
  // let string = JSON.stringify(minerals.gem);
  for (let i = 0; i < allarr.length; i++) {
    searchinput3.innerText = allarr;
    console.log(allarr[i]);
  }
}
function gems() {
  let searchinput2 = document.querySelector(".text");
  // let string = JSON.stringify(minerals.gem);
  for (let i = 0; i < stones.length; i++) {
    searchinput2.innerText = stones;
    console.log(stones[i]);
  }
}
function stone() {
  let searchinput = document.querySelector(".text");
  // let string = JSON.stringify(minerals.gem);
  for (let i = 0; i < minerals.length; i++) {
    searchinput.innerText = minerals;
    console.log(minerals[i]);
  }
}
