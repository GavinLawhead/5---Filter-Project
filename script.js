const gems = [
  ["Diamond", "10"],
  ["Ruby", "9"],
  ["Sapphire", "7.5"],
  ["Emerald", "7.5"],
  ["Amathyst", "7"],
  ["Amber", "2"],
];

const metals = [
  ["Iron", "4.5"],
  ["Steel", "4.5"],
  ["Nickel", "4"],
  ["Tin", "1.5"],
  ["Gold", "2.5"],
];

let minerals = gems + "," + metals;
document.querySelector("p").innerHTML = minerals;

function showall() {
  document.querySelector("p").innerHTML = minerals;
}
function Gems() {
  //   const cutat = Minerals.slice(0, 6);
  document.querySelector("p").innerHTML = gems;
}
function metal() {
  //   const cutat = Minerals.slice(6, 11);
  document.querySelector("p").innerHTML = metals;
}
