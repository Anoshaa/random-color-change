// Random Color change
function RandomColor() {
    let val1 =Math.ceil(100 + Math.random()*255)
    let val2 =Math.ceil(100 + Math.random()*255)
    let val3 =Math.ceil(100 + Math.random()*255)
    return `rgb(${val1},${val2},${val3})`;
}
setInterval(() => {
    document.querySelector(".btn").style.backgroundColor =RandomColor();
    document.querySelector("body").style.backgroundColor =RandomColor();
}, 1000);