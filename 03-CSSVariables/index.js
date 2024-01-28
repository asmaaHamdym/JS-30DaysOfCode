const img = document.querySelector("img");
const inputs = document.querySelectorAll(".controls input");

function setImgVariables() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
inputs.forEach((input) => input.addEventListener("change", setImgVariables));
inputs.forEach((input) => input.addEventListener("mousemove", setImgVariables));
