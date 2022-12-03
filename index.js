const colorSpan = document.getElementById("colorCode");
const hexSpan = document.getElementById("hexSpan");
const simpleSpan = document.getElementById("simpleSpan");

let color = "white";
const colorArr = ["#9C254D", "white", "#10A19D", "#F8F988", "#453C67"]
let type = "simple";

function setColorType(colortype) {
    if (colortype === "simple") {
        simpleSpan.style.color = "#289ff5";
        hexSpan.style.color = "black";
    } else {
        simpleSpan.style.color = "black";
        hexSpan.style.color = "#289ff5";
    }
    type = colortype;
}

function getRandomNumber(len) {
    return Math.floor(Math.random() * len);
}

function getSimpleRandomColor() {
    let randomNo = getRandomNumber(colorArr.length);
    if (colorArr[randomNo] === color) {
        while (colorArr[randomNo] === color) {
            randomNo = getRandomNumber();
            return colorArr[randomNo];
        }
    }
    return colorArr[randomNo];
}

function getHexRandomColor() {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = "#";

    while (hexColor.length != 7) {
        let randNo = getRandomNumber(arr.length);
        hexColor += arr[randNo];
    }
    return hexColor;
}

function changeColor() {
    if (type == "simple") {
        color = getSimpleRandomColor();
    } else {
        color = getHexRandomColor();
    }
    document.body.style = `background: ${color}`;
    colorSpan.textContent = color;
}