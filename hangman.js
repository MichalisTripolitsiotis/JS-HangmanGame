let word;
let letter;
let wordArray;
let array;
let remainingLetters;

function encryption(word) {
  wordArray = Array.from(word);
  var mask = "-".repeat(word.length);
  array = Array.from(mask);
  array.splice();
  if (array === undefined || array.length == 0)
    messages = document.getElementById("messages").innerHTML =
      "Add at least one letter";
  enWord = document.getElementById("enPhrase").innerHTML = array.join(" ");
  remainingLetters = word.length;
  rl = document.getElementById("rl").innerHTML = remainingLetters;
}

function findPhrase(letter) {
  while (remainingLetters > 0) {
    if (letter == null) {
      console.log("null");
    } else if (letter.length !== 1) {
      console.log("Single letter only");
    } else {
      for (var i = 0; i < array.length; i++) {
        if (wordArray[i] === letter) {
          array[i] = letter;

          enWord = document.getElementById("enPhrase").innerHTML = array.join(
            " "
          );
          remainingLetters--;
          rl = document.getElementById("rl").innerHTML = remainingLetters;
        }
      }
      break;
    }
    break;
  }
}
