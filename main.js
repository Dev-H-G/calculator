let display = document.querySelector(".display");
let list = document.querySelectorAll(".show-display");
document.querySelector(".clear-last").addEventListener("click", clearLast);
document.querySelector(".all-clear").addEventListener("click", allClear);
document.querySelector(".calculate").addEventListener("click", calculate);

function showDisplay(kala) {
    const x = kala.target.innerText;
    if (display.innerHTML == 0) { return display.innerHTML = x }
    return display.innerHTML += x;
};

function calculate() {
    let result = display.innerText;
    display.innerText = eval(result);
}

function allClear() { display.innerText = 0 };
list.forEach(item => {
    item.addEventListener("click", showDisplay);

});

function clearLast() {
    let text = display.innerText;
    if (text.length === 1) {
        display.innerText = 0;
    } else {
        display.innerText = text.substring(0, text.length - 1)
    }
};