let eggs = {
  scroll: {
    found: false,
    text:
      "Bei uns ist ALLE Tage im Jahr Ostern, nur dass man einmal im Jahr Ostern feiert. (Martin Luther)",
  },
  hover: {
    found: false,
    text: "What's up, Doc?",
  },
  link: {
    found: false,
    text: "Linke Tür, rechts einordnen, jeder nur ein Kreuz!",
  },
  image: {
    found: false,
    text: "Ich schenke dir ein Osterei, wenn du's zerbrichst, so hast du zwei.",
  },
  print: {
    found: false,
    text: "Jede Liebesgeschichte erzählt von Ostern. (Monika Minder)",
  },
  isbn: {
    found: false,
    text: "Wer Ostern kennt, kann nicht verzweifeln. (Dietrich Bonhoeffer)",
  },
  form: {
    found: false,
    text:
      "Es ist das Osterfest alljährlich für den Hasen recht beschwerlich. (Wilhem Busch)",
  },
  egg: {
    found: false,
    text:
      "Das weiß ein jeder, wer's auch sei, gesund und stärkend ist das Ei. (Wilhelm Busch)",
  },
  select: {
    found: false,
    text:
      "Ostern ist die Zukunft des Menschen. Hier wird er wieder der Mensch, wie er geplant war. (August Everding)",
  },
  resize: {
    found: false,
    text: "Nu sajaz, nu pogodi!",
  },
};

let intro =
  "Du hast es vielleicht schon geahnt... auch auf dieser Seite gibt es Easter Eggs :) Du hast gerade das erste von 10 gefunden. Wenn du unten rechts auf das Ei klickst, siehst du, welche du schon gefunden hast. Viel Spaß!<br>(Für alle, die Quellcode lesen können: bitte nicht schummeln!!)<br><br>";
let counter = 0;
let countDisplay = document.getElementById("count");
let countWrapper = document.getElementById("count-wrapper");
let eggAlert = document.getElementById("egg-alert");
let eggAlertText = document.getElementById("egg-alert-text");
let eggList = document.getElementById("egg-list");
let eggListTexts = document.getElementById("egg-list-texts");
let eggListCount = document.getElementById("egg-list-count");

function findEgg(id, event) {
  let egg = eggs[id];
  if (!egg.found) {
    if (event) {
      event.preventDefault();
    }
    egg.found = true;
    counter++;
    setCountDisplay();
    let text = getFoundEggsKeys().length === 1 ? intro : "";
    alertEgg(text + egg.text);
  }
}

function setCountDisplay() {
  if (counter === 1) {
    countWrapper.style.display = "block";
  }
  countDisplay.textContent = counter;
}

function alertEgg(text) {
  eggList.style.display = "none";
  eggAlertText.innerHTML = text;
  eggAlert.style.display = "block";
}

document.getElementById("egg-alert-close").addEventListener("click", () => {
  eggAlert.style.display = "none";
});

countWrapper.addEventListener("click", () => {
  eggAlert.style.display = "none";
  eggList.style.display = "block";
  let eggListCountEggs = 0;
  getFoundEggsKeys().forEach((key) => {
    let li = document.createElement("li");
    li.textContent = eggs[key].text;
    eggListTexts.appendChild(li);
    eggListCountEggs++;
  });
  eggListCount.textContent = eggListCountEggs;
});

function getFoundEggsKeys() {
  return Object.keys(eggs).filter((key) => eggs[key].found);
}

document.getElementById("egg-list-close").addEventListener("click", () => {
  eggList.style.display = "none";
  eggListTexts.innerHTML = "";
});
