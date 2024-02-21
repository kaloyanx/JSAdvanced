function search() {
  let contentArray = Array.from(document.querySelectorAll("body ul li"));
  for (el of contentArray) {
    el.style.fontWeight = "";
    el.style.fontStyle = "";
  }
  let matches = 0;
  let searchedRef = document.getElementById("searchText").value;
  for (el of contentArray) {
    if (
      el.textContent.includes(searchedRef) &&
      searchedRef !== " " &&
      searchedRef !== ""
    ) {
      el.style.fontWeight = "bold";
      el.style.fontStyle = "italic";
      matches++;
    }
  }
  document.getElementById("result").textContent = `${matches} matches found`;
  document.getElementById("searchText").value = "";
}
