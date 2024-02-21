function attachGradientEvents() {
  const gradient = document.getElementById("gradient-box");
  const textFieldRef = document.getElementById("gradient");
  const fieldLength = gradient.clientWidth;
  const errorMargin = gradient.offsetLeft;
  gradient.addEventListener("mousemove", capture);
  gradient.addEventListener("mouseout", () => {
    textFieldRef.textContent = "Hover here!";
  });
  console.log(gradient);
  function capture(e) {
    let perc = Math.floor(((e.clientX - errorMargin) / fieldLength) * 100);
    textFieldRef.textContent = `${perc}%`;
    console.log(e.clientX);
  }
}
