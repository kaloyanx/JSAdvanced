function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  let tableArray = Array.from(document.querySelectorAll("tbody tr"));
  function onClick() {
    for (el of tableArray) {
      el.classList.remove("select");
    }
    let searchedRef = document.getElementById("searchField").value;
    for (el of tableArray) {
      for (piece of el.childNodes) {
        if (
          piece.textContent.includes(searchedRef) &&
          searchedRef !== "" &&
          searchedRef !== " "
        ) {
          el.classList.add("select");
          break;
        }
      }
    }

    document.getElementById("searchField").value = "";
  }
}
