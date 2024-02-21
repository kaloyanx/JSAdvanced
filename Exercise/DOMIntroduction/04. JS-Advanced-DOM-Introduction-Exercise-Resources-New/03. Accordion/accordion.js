function toggle() {
  let status = document.querySelector("div span").textContent;
  if (status === "More") {
    document.querySelector("div span").textContent = "Less";
    document.getElementById("extra").style.display = "block";
    return;
  } else {
    document.querySelector("div span").textContent = "More";
    document.getElementById("extra").style.display = "none";
  }
}
