//Flat Note symbol: ♭
const fretNotesArray = {
  Eb: [
    "E♭","E","F","G♭","G","A♭","A","B♭","B","C","D♭","D","E♭",
    "e","f","g♭","g","a♭","a","b♭","b","c","c♭","d","e♭",
  ],
  E: [
    "E","F","F#","G","G#","A","A#","B","C","C#","D","D#",
    "e","f","f#","g","g#","a","a#","b","c","c#","d","d#",
  ],
  Ab: [
    "A♭", "A","B♭","B","C","D♭","D","E♭","E","F","G♭","G",
    "a♭","a","b♭","b","c","d♭","d","e♭","e","f","g♭","g"
  ],
  A: [
    "A","A#","B","C","C#","D","D#","E","F","F#","G","G#",
    "a","a#","b","c","c#","d","d#","e","f","f#","g","g#"
  ],
  Db: [
    "D♭","D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B", "C",
    "d♭","d", "e♭", "e", "f", "g♭", "g", "a♭", "a", "b♭", "b", "c"
  ],
  D: [
    "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#",
    "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b", "c", "c#",
  ],
  Gb: [
    "G♭", "G", "A♭", "A", "B♭", "B", "C", "D♭", "D", "E♭", "E", "F",
    "g♭", "g", "a♭", "a", "b♭", "b", "c", "d♭", "d", "e♭", "e", "f"
  ],
  G: [
    "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#",
    "g", "g#", "a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#"
  ],
  Bb: [
    "B♭", "B", "C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A",
    "b♭", "b", "c", "d♭", "d", "e♭", "e", "f", "g♭", "g", "g#", "a"
  ],
  B: [
    "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#",
    "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#"
  ],
};

if (window.location.hostname == "tabs.ultimate-guitar.com") {
  (() => {
    let tabLines = document.querySelectorAll("._1zlI0");

    tabLines.forEach(line => {
      let openString = line.textContent.match(/^[a-z]+/gim);
      
      if (fretNotesArray.hasOwnProperty(openString)) {
        //Replacing fret numbers with Letters
        line.childNodes[0].textContent = line.childNodes[0].textContent.replace(/[0-9]+/gmi, (fretNumber) => {
          let fretNote = fretNotesArray[openString][fretNumber];
          if(!fretNote) {
            //If same note/fret number is repeated twice without a "-" inbetween them treat them as two seperate numbers
            fretNote = fretNumber.split('').map(newFretNumber => fretNotesArray[openString][newFretNumber]).join('');
          }
          //Ternary added to make sure "undefined" isn't returned
          return fretNote ? fretNote : fretNumber; 
        });
        //End Replacing Section
      }
    });
  })();
}

