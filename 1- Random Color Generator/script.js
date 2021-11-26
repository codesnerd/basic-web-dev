const body = document.body;
const h1 = document.querySelector("h1");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const color = generateColor();
  body.style.backgroundColor = color;
  h1.innerText = color;
});

const generateColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};
