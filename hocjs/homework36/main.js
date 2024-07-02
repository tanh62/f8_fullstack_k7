
const title_link = document.querySelector(".title_link");
let title = title_link.innerText;
// console.log(title);
title_link.innerText = title.toUpperCase();
let button = document.querySelector("button");
button.disabled = true;
button.addEventListener("click", () => {
    if (count == 0) {
        window.location.href = "https://www.youtube.com/";
    }
});
document.addEventListener("keydown", (e) => {
    e.preventDefault();
});
let count = 30;
const counterElement = document.querySelector(".count");
console.log(counterElement);
const decrement = 1;
const interval = 1000;
let lastTime = performance.now();
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        cancelAnimationFrame(animationFrameId);
    } else {
        requestAnimationFrame(updateCounter);
    }
});

let animationFrameId;
function updateCounter(currentTime) {
    if (count > 0) {
        if (currentTime - lastTime >= interval) {
            count -= decrement;
            counterElement.textContent = count;
            lastTime = currentTime;
        }
        requestAnimationFrame(updateCounter);
    } else {
        button.disabled = false;
    }
}
animationFrameId = requestAnimationFrame(updateCounter);
