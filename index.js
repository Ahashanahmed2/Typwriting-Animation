const texts = ["websites", "illutration", "pancakes",'dddd','cccc'];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        index = 0;
        count++;
    }
    setTimeout(type, 400);
})();

let sli = texts.splice(0,1);
console.log(sli);
console.log(texts);