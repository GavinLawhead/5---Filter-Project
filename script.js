const Minerals = [
  { gem: "Diamond", hardness: 1 },
  { gem: "Ruby", hardness: 2 },
  { gem: "Sapphire", hardness: 3 },
  { gem: "Emerald", hardness: 4 },
  { gem: "Amathyst", hardness: 5 },
  { gem: "Amber", hardness: 6 },
];

// make a return funtion thjat returns the matching word from the array
window.checkarray = function () {
  let searchinput = document.getElementById("searchinput");
  let doc = document.getElementById("forum").innerHTML;
  // i am calling the textg in the input
  doc = "";
  for (let i = 0; i < Minerals.length; i++) {
    // this is a for loop, looping the array
    if (searchinput.value == Minerals[i].gem) {
      // if the search has the same text as the array
      console.log(searchinput.value + " was found in the array");
      // then console.log whats in the searchbar
    }
    if (doc == "") {
      doc = searchinput.value + " was found in the array";
    }
  }
};
