const body = document.body;
const h1 = document.querySelector("h1");
const span = document.querySelector("span");
const button = document.querySelector("button");

let isColorSet = false;

button.addEventListener("click", () => {
  const color = generateColor();
  setColor(color);

  h1.style.cursor = "pointer";

  enableTooltipVisibility();
});

/* SET BACKGROUND COLOR */

const setColor = (color) => {
  body.style.backgroundColor = color;
  h1.innerText = color;

  isColorSet = true;
};

const generateColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};

/* HANDLE 'COPY TO CLIPBOARD' TOOLTIP */

const enableTooltipVisibility = () => {
  span.classList.remove("tooltip-before-color-set");
  span.classList.add("tooltip-after-color-set");
  span.innerText = "Copy to Clipboard";
};

h1.addEventListener("click", () => {
  if (isColorSet) {
    copyToClipboard(h1.innerText);
    span.innerText = "Copied";
  }
});

const copyToClipboard = (h1InnerText) => {
  navigator.clipboard.writeText(h1InnerText);
};
