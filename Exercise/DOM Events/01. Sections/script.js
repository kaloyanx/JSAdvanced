function create(words) {
  const divRef = document.getElementById("content");
  for (w of words) {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = w;
    p.style.display = "none";
    div.appendChild(p);
    div.addEventListener("click", (e) => {
      e.target.firstChild.style.display = "block";
    });
    divRef.appendChild(div);
  }
}
