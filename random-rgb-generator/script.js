const body = document.body;
const h1 = document.querySelector("h1");
const span = document.querySelector("span");
const button = document.querySelector("button");

let isColorSet = false;
let isCopied = false;

button.addEventListener("click", () => {
  setColor();
  resetTooltipText();

  h1.style.cursor = "pointer";
});

/* SET BACKGROUND COLOR */

const setColor = () => {
  const color = generateRGBColor();

  body.style.backgroundColor = color;
  setInnerText(h1, color);

  if (!isColorSet) {
    enableTooltipVisibility();
  }

  isColorSet = true;
};

const generateRGBColor = () => {
  const r = generateRandomColorValue();
  const g = generateRandomColorValue();
  const b = generateRandomColorValue();

  return `rgb(${r}, ${g}, ${b})`;
};

const generateRandomColorValue = () => {
  return Math.floor(Math.random() * 256);
};

/* HANDLE 'COPY TO CLIPBOARD' TOOLTIP */

const enableTooltipVisibility = () => {
  span.classList.remove("tooltip-before-color-set");
  span.classList.add("tooltip-after-color-set");
};

const resetTooltipText = () => {
  if (isCopied) {
    setInnerText(span, "Copy to Clipboard");
    isCopied = false;
  }
};

h1.addEventListener("click", () => {
  if (isColorSet && !isCopied) {
    copyToClipboard(h1.innerText);
    setInnerText(span, "Copied");
  }
});

const copyToClipboard = (h1InnerText) => {
  navigator.clipboard.writeText(h1InnerText);
  isCopied = true;
};

/* HELPER FUNCTIONS */

const setInnerText = (element, textToSet) => {
  element.innerText = textToSet;
};
