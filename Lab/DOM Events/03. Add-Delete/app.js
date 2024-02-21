function addItem() {
  let text = document.getElementById("newItemText").value;
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.href = "#";
  a.appendChild(document.createTextNode("[Delete]"))
  a.addEventListener("click", deleteEl);
  li.appendChild(document.createTextNode(text));
  li.appendChild(a);
  document.getElementById("items").appendChild(li);
  function deleteEl() {
        li.remove()
    }
    document.getElementById("newItemText").value = "";
}
