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
const combine = [];
function all() {
  let searchinput3 = document.querySelector(".text");
  // let string = JSON.stringify(minerals.gem);
  searchinput3.innerText = JSON.stringify(allarr);
  console.log(allarr);
  // YOUR ALLLARR FUNCTION ISNT WORKING
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
