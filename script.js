const MIN_SIZE = 10;
const MAX_SIZE = 20;
const MIN_DURATION = 2000;
const MAX_DURATION = 5000;

const snowVsRainInput = document.getElementById("snow-vs-rain");
const quantityInput = document.getElementById("quantity");
const colorInput = document.getElementById("click-color");
const windInput = document.getElementById("wind");

const snowflakesContainer = document.getElementById("snowflakes-container");

let rainAmount = 0.5;
let quantityAmount = 400;
let colorValue = "#A600FF";
let windAmount = 0;

let repeatingElement = setInterval(() => createSnowflake(), quantityAmount);

snowVsRainInput.addEventListener("input", () => {
  rainAmount = Number(snowVsRainInput.value)
})

quantityInput.addEventListener("input", () => {
  switch (quantityInput.value) {
    case "0":
      quantityAmount = 1000000;
      break;
    case "1":
      quantityAmount = 400;
      break;
    case "2":
      quantityAmount = 100;
      break;
    case "3":
      quantityAmount = 25;
      break;
    case "4":
      quantityAmount = 0;
      break;
  }
  clearInterval(repeatingElement);
  repeatingElement = setInterval(() => createSnowflake(), quantityAmount);
})

colorInput.addEventListener("input", () => {
  colorValue = colorInput.value
})

windInput.addEventListener("input", () => {
  windAmount = windInput.value
})


function randint(lo, hi) {
  return Math.random() * (hi - lo) + lo;
}

function randomIcon() {
  if (Math.random() > rainAmount) {
    return "fa-snowflake";
  } else {
    return "fa-tint";
  }
}

function createSnowflake() {
  const snowFlake = document.createElement("i");

  snowFlake.classList.add("fas", randomIcon());
  snowFlake.style.color = colorValue;
  snowFlake.style.left = randint(0, 100) + "%";
  snowFlake.style.opacity = Math.random();
  snowFlake.style.fontSize = randint(MIN_SIZE, MAX_SIZE) + "px";

  snowflakesContainer.appendChild(snowFlake);

  snowFlake
    .animate(
      { transform: `translate(${windAmount}vw, 100vh)` },
      { duration: randint(MIN_DURATION, MAX_DURATION) }
    )
    .finished.then(() => snowFlake.remove());
}
