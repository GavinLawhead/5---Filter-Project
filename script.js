const minerals = [
  { gem: "diamond", hardness: 1 },
  { gem: "ruby", hardness: 2 },
  { gem: "sapphire", hardness: 3 },
  { gem: "emerald", hardness: 4 },
  { gem: "amathyst", hardness: 5 },
  { gem: "amber", hardness: 6 },
];

// make a return funtion thjat returns the matching word from the array
window.checkarray = function () {
  let searchinput = document.getElementById("searchinput");
  let doc = document.getElementById("answer").innerHTML;
  // i am calling the textg in the input
  for (let i = 0; i < minerals.length; i++) {
    // this is a for loop, looping the array
    if (searchinput.value == minerals[i].gem) {
      // if the search has the same text as the array
      doc = searchinput.value + " was found in the array";
      console.log(searchinput.value + " was found in the array");
      // then console.log whats in the searchbar
    }
  }
};
// Have to search through lowercase and uppercase
