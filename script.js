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
const allarr = stones + minerals;
function all() {
  let searchinput3 = document.querySelector(".text");
  // let string = JSON.stringify(minerals.gem);
  searchinput3.innerText = allarr;
  console.log(allarr);
  // YOUR ALLLARR FUNCTION ISNT WORKING
}
function gems() {
  let searchinput = document.querySelector(".text");
  // let string = JSON.stringify(minerals.gem);
  for (let i = 0; i < minerals.length; i++) {
    searchinput.innerText = minerals;
    console.log(minerals[i]);
  }
}
function stone() {
  let searchinput2 = document.querySelector(".text");
  // let string = JSON.stringify(minerals.gem);
  for (let j = 0; j < stones.length; j++) {
    searchinput2.innerText = stones;
    console.log(stones[j]);
  }
}
