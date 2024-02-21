function lockedProfile() {
  const buttonArray = Array.from(document.querySelectorAll("button"));

  buttonArray.forEach((x) =>
    x.addEventListener("click", (e) => {
      if (
        e.target.parentElement.querySelector("input[type='radio']:checked")
          .value == "lock"
      ) {
        return;
      }
      let profile = e.target.parentElement.querySelector("div");
      profile.style.display == "block"
        ? (profile.style.display = "none")
        : (profile.style.display = "block");
      e.target.textContent == "Show more"
        ? (e.target.textContent = "Hide it")
        : (e.target.textContent = "Show more");
    })
  );
}
