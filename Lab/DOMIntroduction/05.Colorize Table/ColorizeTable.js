function colorize() {
  const list = document.getElementsByTagName("tr");
  for (let i = 1; i < list.length; i += 2) {
    list[i].style.backgroundColor = "Teal";
  }
}
