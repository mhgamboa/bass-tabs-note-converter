const fretNotes = {
  E: [
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "e",
    "f",
    "f#",
    "g",
    "g#",
    "a",
    "a#",
    "b",
    "c",
    "c#",
    "d",
    "d#",
  ],
  A: [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "a",
    "a#",
    "b",
    "c",
    "c#",
    "d",
    "d#",
    "e",
    "f",
    "f#",
    "g",
    "g#",
  ],
  D: [
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "d",
    "d#",
    "e",
    "f",
    "f#",
    "g",
    "g#",
    "a",
    "a#",
    "b",
    "c",
    "c#",
  ],
  G: [
    "G",
    "G#",
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "e",
    "f",
    "f#",
    "g",
    "g#",
    "a",
    "a#",
    "b",
    "c",
    "c#",
    "d",
    "d#",
    "e",
    "f",
    "f#",
  ],
  B: [
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "a",
    "a#",
    "b",
    "c",
    "c#",
    "d",
    "d#",
    "e",
    "f",
    "f#",
    "g",
    "g#",
    "a",
    "a#",
  ],
};

const tabSection = document.querySelector("._3zygO");
let url = window.location.hostname;

const replaceBassTabs = (element) => {
  let dashRegex = /(——|--)/gi;
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (
    //element.nodeType === Text.TEXT_NODE &&
    dashRegex.test(element.textContent)
  ) {
    element.textContent = element.textContent.replace(/[0-9]+/gi, (match) => {
      if (fretNotes[`${element.textContent[0]}`][match]) {
        if (element.textContent[1] == "b") {
          return fretNotes[`${element.textContent[0]}b`][match];
        }
        return fretNotes[`${element.textContent[0]}`][match];
      } else {
        return match;
      }
    });
  }
};

if (url === "tabs.ultimate-guitar.com") {
  replaceBassTabs(tabSection);
}
