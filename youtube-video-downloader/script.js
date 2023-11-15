const urlInput = document.getElementById("input");
const submitBtn = document.getElementById("btn");
const iframe = document.getElementById("iframe");

// urlInput.placeholder = "Hi";

submitBtn.addEventListener("click", () => {
  setIframeSource();
});

const splitString = (url) => {
  console.log(url);
  // www.youtube.com/watch?v=RBSGKlAvoiM
  const videoId = url.split("=");

  return `https://www.youtube.com/embed/${videoId}`;
};

const setIframeSource = () => {
  let newUrl = splitString(urlInput.value);

  console.log(newUrl);
  iframe.setAttribute("src", newUrl);

  iframe.style.display = "block";
};
