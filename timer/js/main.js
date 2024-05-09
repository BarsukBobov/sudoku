"use strict";

var downloadButton = document.getElementById("download");
var counter = 5;
var newElement = document.createElement("p");
newElement.innerHTML = "www.xyz.com";
var id;
let focusOut = false;

downloadButton.parentNode.replaceChild(newElement, downloadButton) // тоже самое строкой ниже,
// но тут сначала обращаются к отцу и потом назад к сыну
// downloadButton.replaceWith(newElement)

function startDownload() {
    this.style.display = 'blocked';
    id = setInterval(function() {
        if (!focusOut) {
            counter--;
            if (counter < 0) {

                clearInterval(id);
                counter = 5;
            } else {
                newElement.innerHTML = counter.toString() + " second.Please Wait";
            }
        }
    }, 1000);
};

var clickbtn = document.getElementById("btn");
clickbtn.onclick = startDownload

window.addEventListener('visibilitychange', function() {
    focusOut = true;
})

// window.addEventListener('blur', function() {
//     focusOut = true;
// })

// window.addEventListener('focus', function() {
//     focusOut = false;
// });




const listen_arrow=['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown']
const listen_digit=['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9']
const listen_numpud=['Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad7', 'Numpad8', 'Numpad9']
const log = document.getElementById('log')

function logKey(e) {
    let key=e.code
    // let res = listen_arrow.find(item=>item==e.code);
    if (key=='ArrowDown')
    {
        log.textContent += ` ${key}`;
        e.preventDefault();
    }
}

document.addEventListener('keydown', logKey)


