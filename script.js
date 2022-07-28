// const minerals = [
//   " Vesuvianit",
//   " Watermelon Tourmaline",
//   " Willemite",
//   " Zincite",
//   " Zircon",
//   " Zoisite",
//   " Zultanite",
// ];
// const stones = [
//   " granite",
//   " obsidion",
//   " marbel",
//   " concrete",
//   " quartz",
//   " talc",
//   " river-rock",
// ];
// const combine = [];
// let allarr = combine.concat(minerals, stones);
// function all() {
//   let searchinput3 = document.querySelector(".text");
//   // let string = JSON.stringify(minerals.gem);
//   searchinput3.innerText = JSON.stringify(allarr);
//   console.log(allarr);
//   // YOUR ALLLARR FUNCTION ISNT WORKING
// }
// function gems() {
//   let searchinput2 = document.querySelector(".text");
//   // let string = JSON.stringify(minerals.gem);
//   for (let i = 0; i < stones.length; i++) {
//     searchinput2.innerText = stones;
//     console.log(stones[i]);
//   }
// }
// function stone() {
//   let searchinput = document.querySelector(".text");
//   // let string = JSON.stringify(minerals.gem);
//   for (let i = 0; i < minerals.length; i++) {
//     searchinput.innerText = minerals;
//     console.log(minerals[i]);
//   }
// }
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
const combine = arr1.concat(arr2);
function all() {
  return combine;
}
function gems() {
  let searchinput2 = document.querySelector(".text");
  for (let i = 0; i < arr1.length; i++) {
    searchinput2.innerText = arr1;
    console.log(arr1[i]);
  }
}
function stone() {
  let searchinput = document.querySelector(".text");
  for (let i = 0; i < arr2.length; i++) {
    searchinput.innerText = arr2;
    console.log(arr2[i]);
  }
}
