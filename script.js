const numbers = [{ hardness: 11 }, { hardness: 29 }, 1, 13, 497];

let keys = document.getElementById("searchinput");
let but = document.getElementById("search");

function searchbar() {
  if (numbers.hasOwnProperty(Number(keys.value)) == -1) {
    alert(keys.value + " Not Found");
  } else {
    alert(
      "message shows it worked, mineral @ " +
        numbers.indexOf(Number(keys.value)) +
        " has that hardness"
    );
  }
}
but.addEventListener("click", searchbar);
