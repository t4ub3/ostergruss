// --- HOVER
document.getElementById("egg-hover").addEventListener("mouseover", () => {
  findEgg("hover");
});

// --- LINK
document.getElementById("egg-link").addEventListener("click", (event) => {
  findEgg("link", event);
});

// --- PRINT
window.addEventListener("afterprint", () => {
  findEgg("print");
});

// --- SCROLL
let initialScroll = true;
window.addEventListener("scroll", () => {
  if (initialScroll) {
    initialScroll = false;
  } else {
    findEgg("scroll");
  }
});

// --- RESIZE
window.addEventListener("resize", () => {
  findEgg("resize");
});

// --- IMAGE
let dragImg = document.getElementById("egg-img");
let dropImg = document.getElementById("egg-drop");
dragImg.addEventListener("dragstart", (event) => {
  document
    .getElementById("egg-img-wrapper")
    .classList.add("egg-img-wrapper--expanded");
  dropImg.style.display = "block";
  event.dataTransfer.setData("text", "egg");
});

dropImg.addEventListener("dragover", (event) => {
  event.preventDefault();
});

dropImg.addEventListener("drop", (event) => {
  event.preventDefault();
  if (event.dataTransfer.getData("text") === "egg") {
    dragImg.style.left = 0;
    dragImg.style.right = "auto";
    dragImg.draggable = false;
    findEgg("image");
  }
});

// --- ISBN
let typedText = "";
let typeTimeout = null;
window.addEventListener("keyup", (event) => {
  typedText += event.key;
  clearTimeout(typeTimeout);
  typeTimeout = setTimeout(() => {
    typedText = "";
  }, 3000);
  if (typedText === "-14032") {
    clearTimeout(typeTimeout);
    findEgg("isbn");
  }
});

// --- FORM
let searchInput = document.getElementById("search-input");
document.getElementById("search").addEventListener("submit", (event) => {
  event.preventDefault();
  let searchText = searchInput.value.toLowerCase();
  if (searchText === "easter egg" || searchText === "easteregg") {
    findEgg("form");
  } else {
    window.open("https://de.wikipedia.org/wiki/" + searchText, "_blank");
  }
});

// --- EGG
document.getElementById("egg-alert-egg").addEventListener("click", () => {
  findEgg("egg");
});

// --- SELECT
document.addEventListener("mouseup", () => {
  if (
    window
      .getSelection()
      .toString()
      .match(/^.{0,10}Egggs.{0,10}$/)
  ) {
    findEgg("select");
  }
});
