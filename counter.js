let eggs = {
  hover: {
    found: false,
    text: "hover egg",
  },
  link: {
    found: false,
    text: "link egg",
  },
};

let counter = 0;
let countDisplay = document.getElementById("count");

function count(id, event) {
  let egg = eggs[id];
  if (!egg.found) {
    if (event) {
      event.preventDefault();
    }
    egg.found = true;
    alert(egg.text);
    counter++;
    setCountDisplay();
  }
}

function setCountDisplay() {
  if (counter === 1) {
    document.getElementById("count-wrapper").style.display = "block";
  }
  countDisplay.textContent = counter;
}
