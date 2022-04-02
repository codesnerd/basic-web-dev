const body = document.body;
const h1 = document.querySelector("h1");
const span = document.querySelector("span");
const button = document.querySelector("button");

let isColorSet = false;
let isCopied = false;

/**
 * Changes background color and resets tooltip.
 */
button.addEventListener("click", () => {
  setColor();
  resetTooltipText();

  h1.style.cursor = "pointer";
});

/* SET BACKGROUND COLOR */

/**
 * Sets the randomly generated color to body and assigns its value to h1 heading.
 * Enables tooltip visibility ONLY for the first time any color is set.
 */
const setColor = () => {
  const color = generateRGBColor();

  body.style.backgroundColor = color;
  setInnerText(h1, color);

  if (!isColorSet) {
    enableTooltipVisibility();
  }

  isColorSet = true;
};

/**
 *
 * @returns Random RGB color
 */
const generateRGBColor = () => {
  const r = generateRandomColorValue();
  const g = generateRandomColorValue();
  const b = generateRandomColorValue();

  return `rgb(${r}, ${g}, ${b})`;
};

/**
 *
 * @returns Random integer between 0 and 255
 */
const generateRandomColorValue = () => {
  return Math.floor(Math.random() * 256);
};

/* HANDLE 'COPY TO CLIPBOARD' TOOLTIP */

/**
 * Enables tooltip visibility by adding and removing relevant classes from the element.
 * Same h1 heading displays the appliation title and the color (once generated).
 * tooltip-before-color-set class is set when the title is being displayed at the start.
 * tooltip-after-color-set is applied when any color is generated for the first time.
 */
const enableTooltipVisibility = () => {
  span.classList.remove("tooltip-before-color-set");
  span.classList.add("tooltip-after-color-set");
};

/**
 * Resets tooltip text ONLY if the color was copied earlier.
 * isCopied flag prevents unnecessary resets.
 */
const resetTooltipText = () => {
  if (isCopied) {
    setInnerText(span, "Copy to Clipboard");
    isCopied = false;
  }
};

/**
 * Copies color value from h1 heading ONLY if color is set and is not already copied.
 * isColorSet ensures that the application title is not copied.
 * !isCopied flag prevents unnecessary copies.
 */
h1.addEventListener("click", () => {
  if (isColorSet && !isCopied) {
    copyToClipboard(h1.innerText);
    setInnerText(span, "Copied");
  }
});

/**
 * Copies color value from h1 heading to clipboard.
 * @param {string} h1InnerText Color value present in h1 heading
 */
const copyToClipboard = (h1InnerText) => {
  navigator.clipboard.writeText(h1InnerText);
  isCopied = true;
};

/* HELPER FUNCTIONS */

/**
 * Sets innerText of an element.
 * @param {Object} element Element whose inner text is to be set
 * @param {string} textToSet Text to be set
 */
const setInnerText = (element, textToSet) => {
  element.innerText = textToSet;
};
